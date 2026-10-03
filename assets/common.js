
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],v=id=>+$('#'+id).value,out=(id,h)=>$('#'+id).innerHTML=h;
const fileName=decodeURIComponent(location.pathname.split('/').pop()).replace(/\.html$/i,'');
const toolName=n=>n.replace(/-/g,' ');
const copy=t=>navigator.clipboard&&navigator.clipboard.writeText(t);
const EMO={'FPS-Performance-Guide':'⚡','Device-Performance-Database':'🖥️','PvP-Settings-Guides':'⚔️','Sensitivity-Converter':'🎯','FOV-Calculator':'👁️','XP-Calculator':'✨','Enchantment-Calculator':'📖','Potion-Calculator':'🧪','Mob-Health-Damage-Calculator':'🧟','Coordinate-Tools':'🧭','Nether-Overworld-Converter':'🔥','Seed-Tools':'🌱','Command-Generator':'⌨️','Color-Code-Text-Formatter':'🎨','Block-Item-ID-Lookup':'🧱','Resource-Pack-Information':'📦','Addon-Compatibility-Checker':'🧩'};
// Icon: an emoji shows instantly; your image (icons/name.png ...) replaces it as soon as it loads. Falls back to main.png, then stays emoji.
function setIcon(img,name,base){const sl=img.parentElement;let em=sl.querySelector('.em');
if(!em){em=document.createElement('span');em.className='em';em.textContent=EMO[name]||'⛏️';em.style.fontSize=(+img.getAttribute('width')||48)*.6+'px';sl.prepend(em)}
img.style.opacity=0;img.onload=()=>{img.style.opacity=1;em.style.display='none'};
const l=name.toLowerCase(),u=l.replace(/-/g,'_'),c=[];
c.push(base+'icons/'+l+'.png');
const L=[...new Set(c)];L.push(base+'icons/main.png');let i=0;
img.onerror=()=>{i++;if(i<L.length)img.src=L[i];else img.onerror=null};img.src=L[0]}
function fixIcons(base){$$('img[data-ic]').forEach(i=>setIcon(i,i.dataset.ic,base||''))}
(function(){const p=document.createElement('div');p.className='px';const C=['#5da13a','#8b8b8b','#6fd3ff','#c8a23a','#b0361f'];
for(let i=0;i<22;i++){const e=document.createElement('i');e.style.cssText=`left:${Math.random()*100}%;background:${C[i%5]};animation-duration:${8+Math.random()*14}s;animation-delay:-${Math.random()*20}s`;p.appendChild(e)}
document.body.prepend(p);const i=$('#ic');if(i)setIcon(i,fileName,'../')})();
