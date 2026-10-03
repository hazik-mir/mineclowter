
(function(){
if(!$('#tt'))return;
if(/[?&]debug/.test(location.search)){const d=document.createElement('pre');d.style.cssText='position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#000;color:#0f0;padding:8px;font-size:10px;margin:0;max-height:40vh;overflow:auto';document.body.appendChild(d);const L=m=>d.textContent+=m+'\n';
L('protocol: '+location.protocol+(location.protocol=='file:'?'  <-- ads and icons need http(s). Host the site or run: python -m http.server':''));
['https://abscloud.org/1/2bbd078b21a80da9f44bcc6cf2a09b26','https://bauval.org/14/23d90973ee23bdd31805e436e25b21a0','https://bauval.org/21/f620aec560d902e4385e5cbbe72efa81'].forEach(u=>fetch(u,{mode:'no-cors'}).then(()=>L('reachable: '+u),()=>L('BLOCKED/unreachable: '+u)));
setTimeout(()=>{const im=$('#ic');L('icon file used: '+(im&&im.currentSrc));L('ad container children: '+$('#container-f620aec560d902e4385e5cbbe72efa81').children.length)},2500)}                                  // tool pages only
const LIMIT=6, WINDOW=60*60*1000, WAIT=3000, AD='https://bauval.org/21/f620aec560d902e4385e5cbbe72efa81';
const st=document.createElement('style');
st.textContent='.locked>*:not(.adn):not(.ph){display:none!important}.adn{text-align:center;padding:10px}.adn p{margin:6px 0 14px}#abx{position:fixed;inset:0;z-index:9999;background:#000e;display:flex;align-items:center;justify-content:center;padding:20px;text-align:center}#abx .card{max-width:460px}';
document.head.appendChild(st);
const g=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},s=(k,x)=>{try{localStorage.setItem(k,JSON.stringify(x))}catch(e){}};

// ---- anti-adblock (only flags when the ad host is blocked but the normal internet works) ----
function blocked(){if($('#abx'))return;const o=document.createElement('div');o.id='abx';o.innerHTML='<div class="card"><div class="ph">Adblocker detected</div><p>Mineclowter is free thanks to ads. Please disable your adblocker for this site and refresh.</p><button onclick="location.reload()">I disabled it - Refresh</button></div>';document.body.appendChild(o)}
const bait=document.createElement('div');bait.className='adsbox ad-banner pub_300x250';bait.style.cssText='position:absolute;left:-999px;width:10px;height:10px';document.body.appendChild(bait);
setTimeout(()=>{if(!bait.offsetHeight||getComputedStyle(bait).display=='none')blocked()},500);
fetch(AD,{mode:'no-cors'}).catch(()=>fetch('https://fonts.googleapis.com/',{mode:'no-cors'}).then(blocked,()=>{}));

// ---- 6 different tools in 60 minutes -> "Watch ad to continue" ----
const card=document.querySelector('main .card'),now=Date.now();
if(now<(g('mc_pass')||0))return;
let list=(g('mc_tools')||[]).filter(x=>now-x.ts<WINDOW);
if(!list.some(x=>x.t===fileName))list.push({t:fileName,ts:now});
s('mc_tools',list);
if(list.length>=LIMIT)lock();
function lock(){card.classList.add('locked');
const n=document.createElement('div');n.className='adn';n.innerHTML='<h3>You\'ve used '+LIMIT+' tools in the last hour</h3><p>Watch ad to continue (the ad is in the panel below)</p><button id="adb">&#9654; Watch ad to continue</button>';card.appendChild(n);
$('#adb').onclick=function(){this.disabled=true;let t=Math.ceil(WAIT/1000);this.textContent='Loading ad... '+t;
const iv=setInterval(()=>{t--;if(t>0){this.textContent='Loading ad... '+t;return}clearInterval(iv);s('mc_pass',Date.now()+WINDOW);s('mc_tools',[]);n.remove();card.classList.remove('locked')},1000)}}
})();
