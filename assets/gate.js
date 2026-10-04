
(function(){
if(!$('#tt'))return;
const LIMIT=6,WINDOW=60*60*1000,WAIT=3000,PROBE='https://bauval.org/21/f620aec560d902e4385e5cbbe72efa81';
const g=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},s=(k,x)=>{try{localStorage.setItem(k,JSON.stringify(x))}catch(e){}};
function bar(h){let b=$('#gbar');if(!b){b=document.createElement('div');b.id='gbar';b.className='bar';document.body.appendChild(b)}b.innerHTML=h;document.body.classList.add('gated')}
function clear(){const b=$('#gbar');if(b)b.remove();document.body.classList.remove('gated')}
let adblock=false;
function blocked(){adblock=true;bar('<span>Adblocker detected. Please turn it off for this site, then refresh.</span><button onclick="location.reload()">I turned it off</button>')}
// adblock detection: hidden bait element, or ad host unreachable while the normal internet works
const bait=document.createElement('div');bait.className='adsbox ad-banner pub_300x250';bait.style.cssText='position:absolute;left:-999px;width:10px;height:10px';document.body.appendChild(bait);
setTimeout(()=>{if(!bait.offsetHeight||getComputedStyle(bait).display=='none')blocked()},500);
fetch(PROBE,{mode:'no-cors'}).catch(()=>fetch('https://fonts.googleapis.com/',{mode:'no-cors'}).then(blocked,()=>{}));
if(/[?&]debug/.test(location.search)){const d=document.createElement('pre');d.style.cssText='position:fixed;top:60px;right:8px;z-index:99;max-width:90vw;font-size:11px';document.body.appendChild(d);d.textContent='protocol: '+location.protocol+(location.protocol=='file:'?' (ads/icons need http/https)':'');
fetch(PROBE,{mode:'no-cors'}).then(()=>d.textContent+='\nad host reachable',()=>d.textContent+='\nad host BLOCKED/unreachable');
setTimeout(()=>d.textContent+='\nad elements: '+$('#container-f620aec560d902e4385e5cbbe72efa81').children.length,2500)}
// 6 different tools within 60 minutes -> "Watch ad to continue" bar
const now=Date.now();if(now<(g('mc_pass')||0))return;
let list=(g('mc_tools')||[]).filter(x=>now-x.ts<WINDOW);
if(!list.some(x=>x.t===fileName))list.push({t:fileName,ts:now});s('mc_tools',list);
if(list.length>=LIMIT)setTimeout(()=>{if(adblock)return;bar('<span>You\'ve used '+LIMIT+' tools this hour. Watch an ad to keep going.</span><button id="gw">&#9654; Watch ad to continue</button>');
$('#gw').onclick=function(){this.disabled=true;let t=Math.ceil(WAIT/1000);this.textContent='Loading ad... '+t;
const iv=setInterval(()=>{t--;if(t>0){this.textContent='Loading ad... '+t;return}clearInterval(iv);s('mc_pass',Date.now()+WINDOW);s('mc_tools',[]);clear()},1000)}},700);
})();
