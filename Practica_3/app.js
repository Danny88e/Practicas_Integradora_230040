const $ = s => document.querySelector(s);
let current = 0, lastFocusedCard = null;
const cards = $('#cards'), search = $('#search'), filter = $('#filter');
const blockDialog = $('#blockDialog'), blockDialogContent = $('#blockDialogContent');
const categoryLabels = {creacion:'Creación de valor',clientes:'Clientes y canales',finanzas:'Finanzas'};
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function matches(b){ const q=normalize(search.value); return (filter.value==='all'||b.category===filter.value)&&(!q||normalize([b.title,b.summary,b.detail,...b.items].join(' ')).includes(q)); }
function cardMarkup(b){const match=matches(b); return `<article class="canvas-block ${b.id} ${match?'':'filtered'}" data-id="${b.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="blockDialog"><div class="block-head"><span class="card-icon">${b.icon}</span><span class="chevron" aria-hidden="true">⌄</span></div><h2>${b.title}</h2><p class="block-summary">${b.summary}</p><ul class="block-preview">${b.items.slice(0,3).map(x=>`<li>${x}</li>`).join('')}</ul></article>`}
function render(){const list=canvasBlocks.filter(matches);cards.innerHTML=canvasBlocks.map(cardMarkup).join('');$('#empty').hidden=!!list.length;}
function openBlock(id,trigger){const block=canvasBlocks.find(item=>item.id===id);if(!block)return;lastFocusedCard=trigger;blockDialogContent.innerHTML=`<span class="dialog-icon card-icon" aria-hidden="true">${block.icon}</span><span class="category">${categoryLabels[block.category]}</span><h2 id="dialogTitle">${block.title}</h2><p class="dialog-summary">${block.summary}</p><p class="dialog-detail">${block.detail}</p><ul class="dialog-items">${block.items.map(item=>`<li>${item}</li>`).join('')}</ul>`;if(!blockDialog.open)blockDialog.showModal();}
cards.addEventListener('click',e=>{const card=e.target.closest('.canvas-block');if(card)openBlock(card.dataset.id,card)});
cards.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.canvas-block')){e.preventDefault();openBlock(e.target.dataset.id,e.target)}});
$('#closeBlockDialog').addEventListener('click',()=>blockDialog.close());
blockDialog.addEventListener('click',e=>{if(e.target===blockDialog)blockDialog.close()});
blockDialog.addEventListener('close',()=>{if(lastFocusedCard?.isConnected)lastFocusedCard.focus({preventScroll:true});lastFocusedCard=null;});
[search,filter].forEach(el=>el.addEventListener(el===search?'input':'change',render));
function explorer(){const b=canvasBlocks[current];$('#progressText').textContent=`${current+1} / ${canvasBlocks.length} · ${b.title}`;$('#progressBar').style.width=`${((current+1)/canvasBlocks.length)*100}%`;$('#explorerContent').innerHTML=`<span class="explorer-icon">${b.icon}</span><span class="category">${b.category}</span><h2>${b.title}</h2><p>${b.detail}</p><ul>${b.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;$('#prev').disabled=current===0;$('#next').textContent=current===canvasBlocks.length-1?'Finalizar':'Siguiente →';}
function showExplorer(){ $('#canvasView').hidden=true;$('#explorerView').hidden=false;explorer();$('#explorerView').scrollIntoView({behavior:'smooth',block:'start'});}
function showCanvas(){ $('#explorerView').hidden=true;$('#canvasView').hidden=false;}
$('#exploreBtn').addEventListener('click',showExplorer);$('#canvasBtn').addEventListener('click',showCanvas);$('#closeExplore').addEventListener('click',showCanvas);
$('#prev').addEventListener('click',()=>{if(current){current--;explorer()}});$('#next').addEventListener('click',()=>{if(current<8){current++;explorer()}else showCanvas()});render();
