
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],v=id=>+$('#'+id).value,out=(id,h)=>$('#'+id).innerHTML=h;
const fileName=decodeURIComponent(location.pathname.split('/').pop()).replace(/\.html$/i,'');
const toolName=n=>n.replace(/-/g,' ');
const copy=t=>navigator.clipboard&&navigator.clipboard.writeText(t);
const FB='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="#866043"/><rect width="16" height="5" fill="#5da13a"/></svg>');
// Icon lookup: tries lowercase.png, ExactCase.png, .webp, .jpg, .svg, then main.png, then a built-in block.
function setIcon(img,name,base){const l=name.toLowerCase(),c=[l+'.png',name+'.png',l+'.webp',l+'.jpg',l+'.svg','main.png'].map(f=>base+'icons/'+f);let i=0;img.onerror=()=>{if(++i<c.length)img.src=c[i];else{img.onerror=null;img.src=FB}};img.src=c[0]}
function fixIcons(base){$$('img[data-ic]').forEach(i=>setIcon(i,i.dataset.ic,base||''))}
(function(){const p=document.createElement('div');p.className='px';const C=['#5da13a','#8b8b8b','#6fd3ff','#c8a23a','#b0361f'];
for(let i=0;i<22;i++){const e=document.createElement('i');e.style.cssText=`left:${Math.random()*100}%;background:${C[i%5]};animation-duration:${8+Math.random()*14}s;animation-delay:-${Math.random()*20}s`;p.appendChild(e)}
document.body.prepend(p);const i=$('#ic');if(i)setIcon(i,fileName,'../')})();
