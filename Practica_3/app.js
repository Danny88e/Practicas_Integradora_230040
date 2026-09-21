const $ = s => document.querySelector(s);
let activeId = null, current = 0;
const cards = $('#cards'), search = $('#search'), filter = $('#filter');
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function matches(b){ const q=normalize(search.value); return (filter.value==='all'||b.category===filter.value)&&(!q||normalize([b.title,b.summary,b.detail,...b.items].join(' ')).includes(q)); }
function cardMarkup(b){const open=activeId===b.id, match=matches(b); return `<article class="canvas-block ${b.id} ${open?'open':''} ${match?'':'filtered'}" data-id="${b.id}" tabindex="0" role="button" aria-expanded="${open}"><div class="block-head"><span class="card-icon">${b.icon}</span><span class="chevron">⌄</span></div><h2>${b.title}</h2><p class="block-summary">${b.summary}</p><ul class="block-preview">${b.items.slice(0,3).map(x=>`<li>${x}</li>`).join('')}</ul><div class="card-more"><p>${b.detail}</p><ul>${b.items.map(x=>`<li>${x}</li>`).join('')}</ul><button class="collapse" aria-label="Contraer ${b.title}">Contraer información</button></div></article>`}
function render(){const list=canvasBlocks.filter(matches);cards.innerHTML=canvasBlocks.map(cardMarkup).join('');$('#empty').hidden=!!list.length;}
function toggle(id){activeId=activeId===id?null:id;render();}
cards.addEventListener('click',e=>{const card=e.target.closest('.card');if(card)toggle(card.dataset.id)});cards.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.card')){e.preventDefault();toggle(e.target.dataset.id)}});
[search,filter].forEach(el=>el.addEventListener(el===search?'input':'change',render));
function explorer(){const b=canvasBlocks[current];$('#progressText').textContent=`${current+1} / ${canvasBlocks.length} · ${b.title}`;$('#progressBar').style.width=`${((current+1)/canvasBlocks.length)*100}%`;$('#explorerContent').innerHTML=`<span class="explorer-icon">${b.icon}</span><span class="category">${b.category}</span><h2>${b.title}</h2><p>${b.detail}</p><ul>${b.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;$('#prev').disabled=current===0;$('#next').textContent=current===canvasBlocks.length-1?'Finalizar':'Siguiente →';}
function showExplorer(){ $('#canvasView').hidden=true;$('#explorerView').hidden=false;explorer();$('#explorerView').scrollIntoView({behavior:'smooth',block:'start'});}
function showCanvas(){ $('#explorerView').hidden=true;$('#canvasView').hidden=false;}
$('#exploreBtn').addEventListener('click',showExplorer);$('#canvasBtn').addEventListener('click',showCanvas);$('#closeExplore').addEventListener('click',showCanvas);
$('#prev').addEventListener('click',()=>{if(current){current--;explorer()}});$('#next').addEventListener('click',()=>{if(current<8){current++;explorer()}else showCanvas()});render();
