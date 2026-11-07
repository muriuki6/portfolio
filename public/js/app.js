// Navbar: compact the bar once the page has scrolled (paste at the end of app.js)
addEventListener("scroll",()=>$("#hd").classList.toggle("sc",scrollY>40),{passive:true});

/* ===== Navbar v3: live section chip + quick-jump palette (append to END of app.js) ===== */
(()=>{
const SEC=[["about","About"],["expertise","Expertise"],["stack","Stack"],["experience","Experience"],["projects","Projects"],["services","Services"],["testimonials","Reviews"],["contact","Contact"]];
const EM="nimmuriuki6@gmail.com",GM="https://mail.google.com/mail/?view=cm&fs=1&to="+EM;
const q=s=>document.querySelector(s),sl=q("#sl"),kb=q("#kb"),pk=q("#pk"),inp=q("#pk-q"),list=q("#pk-l");
/* live section label */
let last="";
function sync(){let c=["home","Top"];SEC.forEach(s=>{const e=document.getElementById(s[0]);if(e&&e.getBoundingClientRect().top<=innerHeight*.4){c=s}});
const t=c[0]=="home"?"Top":c[1];if(t!=last){last=t;sl.textContent=t;sl.classList.remove("sw");void sl.offsetWidth;sl.classList.add("sw")}}
let tk=0;addEventListener("scroll",()=>{if(!tk){tk=requestAnimationFrame(()=>{tk=0;sync()})}},{passive:true});sync();
/* palette */
const ACT=[["Write me an email","↗",()=>open(GM,"_blank","noopener")],["Copy email address","⧉",function(b){navigator.clipboard&&navigator.clipboard.writeText(EM);b.querySelector("small").textContent="Copied";return"stay"}],["Start a project","→",()=>{location.hash="#contact"}]];
let items=[],sel=0;
function build(f){f=(f||"").trim().toLowerCase();items=[];let h="";
const S=SEC.filter(s=>!f||s[1].toLowerCase().includes(f)),A=ACT.filter(a=>!f||a[0].toLowerCase().includes(f));
if(S.length){h+='<li class="pk-g">Jump to</li>';S.forEach(s=>{items.push(()=>{location.hash="#"+s[0]});h+=`<li><button type="button" role="option" data-i="${items.length-1}">${s[1]}<small>#${s[0]}</small></button></li>`})}
if(A.length){h+='<li class="pk-g">Actions</li>';A.forEach(a=>{items.push(a[2]);h+=`<li><button type="button" role="option" data-i="${items.length-1}"><em>${a[1]}</em>${a[0]}<small></small></button></li>`})}
list.innerHTML=h||'<li class="pk-e">Nothing matches that.</li>';sel=0;mark()}
function mark(){list.querySelectorAll("button").forEach((b,i)=>{b.setAttribute("aria-selected",i==sel);if(i==sel)b.scrollIntoView({block:"nearest"})})}
function run(b){if(!b)return;const r=items[b.dataset.i](b);if(r!="stay")close()}
function openP(){pk.classList.add("open");pk.setAttribute("aria-hidden","false");kb.setAttribute("aria-expanded","true");inp.value="";build();setTimeout(()=>inp.focus(),30)}
function close(){pk.classList.remove("open");pk.setAttribute("aria-hidden","true");kb.setAttribute("aria-expanded","false");kb.focus({preventScroll:true})}
kb.addEventListener("click",openP);
const mq=matchMedia("(max-width:1100px)"),lock=()=>{kb.disabled=mq.matches;if(mq.matches&&pk.classList.contains("open"))close()};lock();mq.addEventListener?mq.addEventListener("change",lock):mq.addListener(lock);
pk.addEventListener("click",e=>{if(e.target==pk)close();const b=e.target.closest("button");if(b)run(b)});
inp.addEventListener("input",()=>build(inp.value));
pk.addEventListener("keydown",e=>{const bs=[...list.querySelectorAll("button")];
if(e.key=="Escape"){e.preventDefault();close()}
else if(e.key=="ArrowDown"){e.preventDefault();sel=(sel+1)%bs.length;mark()}
else if(e.key=="ArrowUp"){e.preventDefault();sel=(sel-1+bs.length)%bs.length;mark()}
else if(e.key=="Enter"){e.preventDefault();run(bs[sel])}
else if(e.key=="Tab"){e.preventDefault();inp.focus()}});
addEventListener("keydown",e=>{const t=e.target,typing=t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
if((e.key=="k"||e.key=="K")&&(e.metaKey||e.ctrlKey)&&!mq.matches){e.preventDefault();pk.classList.contains("open")?close():openP()}
else if(e.key=="/"&&!mq.matches&&!typing&&!pk.classList.contains("open")){e.preventDefault();openP()}});
const k=q("#kb kbd");if(k)k.textContent=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Ctrl K";
})();