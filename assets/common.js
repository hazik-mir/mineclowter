
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],v=id=>+$('#'+id).value,out=(id,h)=>$('#'+id).innerHTML=h;
const fileName=decodeURIComponent(location.pathname.split('/').pop()).replace(/\.html$/i,'');
const toolName=n=>n.replace(/-/g,' ');
(function(){const p=document.createElement('div');p.className='px';const C=['#5da13a','#8b8b8b','#6fd3ff','#c8a23a','#b0361f'];
for(let i=0;i<22;i++){const e=document.createElement('i');e.style.cssText=`left:${Math.random()*100}%;background:${C[i%5]};animation-duration:${8+Math.random()*14}s;animation-delay:-${Math.random()*20}s`;p.appendChild(e)}
document.body.prepend(p);
const t=$('#tt');if(t){t.textContent=toolName(fileName);document.title=toolName(fileName)+' - Mineclowter';const i=$('#ic');i.src='../icons/'+fileName.toLowerCase()+'.png';i.onerror=()=>{i.onerror=null;i.src='../icons/main.png'}}})();
const copy=t=>navigator.clipboard&&navigator.clipboard.writeText(t);
