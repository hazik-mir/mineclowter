
(function(){
const LIMIT=8;                       // actions allowed before "Watch ad to continue" appears
const WAIT=3000;                     // ms the "ad loading" countdown lasts
const ADS=['https://abscloud.org/1/2bbd078b21a80da9f44bcc6cf2a09b26','https://bauval.org/14/23d90973ee23bdd31805e436e25b21a0','https://bauval.org/21/f620aec560d902e4385e5cbbe72efa81'];
const BOX='container-f620aec560d902e4385e5cbbe72efa81';
const st=document.createElement('style');
st.textContent='.locked>*:not(.adn){display:none!important}.adn{text-align:center;color:#222;padding:10px}.adn p{margin:6px 0 14px}#abx{position:fixed;inset:0;z-index:9999;background:#000e;display:flex;align-items:center;justify-content:center;padding:20px;text-align:center}#abx div{max-width:460px}';
document.head.appendChild(st);
const get=()=>{try{return +localStorage.getItem('mc_uses')||0}catch(e){return 0}},set=n=>{try{localStorage.setItem('mc_uses',n)}catch(e){}};

// ---- anti-adblock ----
function blocked(){if($('#abx'))return;const o=document.createElement('div');o.id='abx';o.innerHTML='<div class="card"><h3>Adblocker detected</h3><p>Mineclowter is free thanks to ads. Please disable your adblocker for this site and refresh.</p><button onclick="location.reload()">I disabled it - Refresh</button></div>';document.body.appendChild(o)}
const bait=document.createElement('div');bait.className='adsbox ad-banner pub_300x250';bait.style.cssText='position:absolute;left:-999px;width:10px;height:10px';document.body.appendChild(bait);
setTimeout(()=>{if(!bait.offsetHeight||getComputedStyle(bait).display=='none')blocked()},400);
fetch(ADS[2],{mode:'no-cors'}).catch(blocked);

// ---- usage gate (tool pages only) ----
const card=document.querySelector('.card');if(!card||document.querySelector('.hero'))return;
function lock(){if(card.classList.contains('locked'))return;card.classList.add('locked');
const n=document.createElement('div');n.className='adn';n.innerHTML='<h3>You\'ve used a lot of features!</h3><p>Watch ad to continue</p><button id="adb">&#9654; Watch ad to continue</button><div id="'+BOX+'"></div>';card.appendChild(n);
$('#adb').onclick=function(){this.disabled=true;let s=Math.ceil(WAIT/1000);this.textContent='Loading ad... '+s;
ADS.forEach(u=>{const e=document.createElement('script');e.src=u;e.async=true;e.setAttribute('data-cfasync','false');document.body.appendChild(e)});
const t=setInterval(()=>{s--;if(s>0){this.textContent='Loading ad... '+s;return}clearInterval(t);set(0);n.remove();card.classList.remove('locked')},WAIT/Math.ceil(WAIT/1000))}}
let last=0;
function use(){const now=Date.now();if(now-last<700)return;last=now;const n=get()+1;set(n);if(n>=LIMIT)lock()}
card.addEventListener('input',use);card.addEventListener('change',use);card.addEventListener('click',e=>{if(e.target.closest('button,tr')&&!e.target.closest('.adn'))use()});
if(get()>=LIMIT)lock();
})();
