
(function(){
const LIMIT=6, WINDOW=60*60*1000, WAIT=3000;   // 6 different tools within 60 minutes -> ad
const ADS=['https://abscloud.org/1/2bbd078b21a80da9f44bcc6cf2a09b26','https://bauval.org/14/23d90973ee23bdd31805e436e25b21a0','https://bauval.org/21/f620aec560d902e4385e5cbbe72efa81'];
const BOX='container-f620aec560d902e4385e5cbbe72efa81';
const st=document.createElement('style');
st.textContent='.locked>*:not(.adn):not(.ph){display:none!important}.adn{text-align:center;padding:10px}.adn p{margin:6px 0 14px}#abx{position:fixed;inset:0;z-index:9999;background:#000e;display:flex;align-items:center;justify-content:center;padding:20px;text-align:center}#abx .card{max-width:460px}';
document.head.appendChild(st);
const g=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},s=(k,x)=>{try{localStorage.setItem(k,JSON.stringify(x))}catch(e){}};

// ---- anti-adblock ----
function blocked(){if($('#abx'))return;const o=document.createElement('div');o.id='abx';o.innerHTML='<div class="card"><div class="ph">Adblocker detected</div><p>Mineclowter is free thanks to ads. Please disable your adblocker for this site and refresh.</p><button onclick="location.reload()">I disabled it - Refresh</button></div>';document.body.appendChild(o)}
const bait=document.createElement('div');bait.className='adsbox ad-banner pub_300x250';bait.style.cssText='position:absolute;left:-999px;width:10px;height:10px';document.body.appendChild(bait);
setTimeout(()=>{if(!bait.offsetHeight||getComputedStyle(bait).display=='none')blocked()},400);
fetch(ADS[2],{mode:'no-cors'}).catch(blocked);

// ---- 60-minute tool counter (tool pages only) ----
if(!$('#tt'))return;
const card=document.querySelector('main .card'),now=Date.now();
if(now<(g('mc_pass')||0))return;                       // ad already watched: free until pass expires
let list=(g('mc_tools')||[]).filter(x=>now-x.ts<WINDOW);
if(!list.some(x=>x.t===fileName))list.push({t:fileName,ts:now});
s('mc_tools',list);
if(list.length>=LIMIT)lock();
function lock(){card.classList.add('locked');
const n=document.createElement('div');n.className='adn';n.innerHTML='<h3>You\'ve used '+LIMIT+' tools in the last hour</h3><p>Watch ad to continue</p><button id="adb">&#9654; Watch ad to continue</button><div id="'+BOX+'"></div>';card.appendChild(n);
$('#adb').onclick=function(){this.disabled=true;let t=Math.ceil(WAIT/1000);this.textContent='Loading ad... '+t;
ADS.forEach(u=>{const e=document.createElement('script');e.src=u;e.async=true;e.setAttribute('data-cfasync','false');document.body.appendChild(e)});
const iv=setInterval(()=>{t--;if(t>0){this.textContent='Loading ad... '+t;return}clearInterval(iv);s('mc_pass',Date.now()+WINDOW);s('mc_tools',[]);n.remove();card.classList.remove('locked')},1000)}}
})();
