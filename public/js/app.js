const EMAIL="nimmuriuki6@gmail.com",EM=/^[^\s@<>()",;:\\]+@[^\s@<>()",;:\\]+\.[^\s@<>()",;:\\]+$/;
const SOC=[["GitHub","https://github.com/muriuki6"],["LinkedIn",""],["Instagram",""],["X",""],["WhatsApp",""]].filter(s=>s[1]);
const IC={code:"M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",globe:"M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",db:"M4 6c0-2 16-2 16 0s-16 2-16 0v12c0 2 16 2 16 0V6M4 12c0 2 16 2 16 0",pen:"M4 20l4-1L19 8l-3-3L5 16zM14 7l3 3",layers:"M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",spark:"M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z",doc:"M7 3h7l4 4v14H7zM14 3v4h4M10 12h6M10 16h6",rocket:"M5 19c0-4 2-6 4-7M14 4c4 0 6 2 6 6-3 4-6 6-9 7l-4-4c1-3 3-6 7-9zM9 15l-3 3"};
const EX=[["code","Software Development","Programs that solve real problems, from core logic to database-driven applications.",["Java","Python","C fundamentals","Object-oriented programming","Database-driven apps","Application development"],["FitPro Gym Management"]],
["globe","Web Development","Responsive, well-structured websites and web applications, including e-commerce.",["Frontend development","Responsive design","E-commerce","API integration","Website management","Website optimization"],["Mkenya Asili","AutoPlugKe"]],
["db","Data Management & Analysis","Clean, organized and reliable data, from entry to spreadsheets and databases.",["Data entry","Data cleaning","Microsoft Excel","Microsoft Word","SQL & SQLite","Analysis fundamentals"],[]],
["layers","Digital Solutions","Practical systems that simplify administration, selling and everyday processes.",["Admin dashboards","Database integration","E-commerce management","Digital administration"],["FitPro Gym Management","Mkenya Asili"]],
["spark","AI & Emerging Technologies","Using AI tools to work faster and exploring where new technology is heading.",["AI-assisted productivity","AI-assisted development","AI tools","Technology research"],[]],
["doc","Technical Writing","Clear documents and content that make technical ideas easy to follow.",["Technical writing","Content development","Professional documents","Research & organization","Creative writing"],[]],
["rocket","Digital Entrepreneurship","Turning ideas into digital products and freelance services.",["Digital business concepts","Freelance services","Idea-to-product thinking"],["Mkenya Asili"]]];
const ST=[["Frontend","What visitors see and touch",["HTML5","CSS3","JavaScript","React","Next.js","Tailwind CSS","Bootstrap"]],["Programming","The code behind the screens",["Java","Python","C","PHP","Node.js fundamentals"]],["Databases","Where information lives",["MySQL","SQLite","Turso","SQL","Drizzle ORM"]],["Tools","Where the work gets done",["Git","GitHub","VS Code","NetBeans","IntelliJ IDEA","Ubuntu / Linux","Figma","Vercel"]]];
const PR=[
{n:"Mkenya Asili",c:"Web",s:"In development",x:1,k:"#FF5B14",d:"A Kenyan artisan e-commerce platform for authentic handmade products, connecting artisans with customers through a modern shopping experience.",f:"Collections, accounts, product management, galleries, admin dashboard",t:["Next.js","React","Drizzle ORM","Turso","SQLite"],g:"https://github.com/muriuki6/mkenya-asili"},
{n:"Magical Flix",c:"Media",s:"Concept",k:"#e8a33d",d:"A Kenya tourism and storytelling platform concept: destinations, wildlife, reels and local creators.",f:"Guides, reels, stories",t:["Web platform","Media"]},
{n:"AutoPlugKe",c:"Web",s:"Project",x:1,k:"#00a3a3",d:"A car dealership website for Auto Plug Kenya with a searchable vehicle inventory, detailed vehicle listings and a services section covering imports, financing, trade-ins and inspections.",f:"Inventory search and filters, vehicle listings, services pages",t:["Web development","UI design","Automotive"],imgs:["img/photo-7.jpg", "img/photo-8.jpg", "img/photo-9.jpg"]},
{n:"FitPro Gym Management",c:"Software",s:"Project",k:"#4F7CFF",d:"A gym management system supporting digital administration, with dynamic charts.",f:"Administration, charts, AJAX",t:["PHP","MySQL","Bootstrap 5","Chart.js"]},
{n:"TradeNex",c:"Software",s:"Concept",k:"#3ddc97",d:"A premium trading interface concept: a design exploration, not a licensed financial service.",f:"Trading UI, dashboards",t:["Fintech","UI design"]}];
const SV=[["Website Development","Fast, responsive sites and apps"],["Software Development","Custom, database-driven tools"],["Website Management","Updates, fixes, ongoing care"],["Data Entry & Organization","Clean, structured data"],["Microsoft Office Support","Excel and Word work"],["Technical Writing","Clear docs and content"],["Digital Technology Support","Practical everyday tech help"]];
const $=s=>document.querySelector(s),esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const mq=matchMedia("(prefers-reduced-motion:reduce)").matches,pad=i=>String(i+1).padStart(2,"0"),chips=a=>`<div class="ch">${a.map(x=>`<span>${x}</span>`).join("")}</div>`;
$("#rb").innerHTML=Array(2).fill(["Software","Web","Data","AI","Writing","Nairobi"].map(x=>`<span>${x}</span><span>✺</span>`).join("")).join("");
let hs=[30,48,26,60,38,22,54,34,68,28,44,36,58,24,46,32,64,40,26,52],sv="";
hs.forEach((h,i)=>{const x=i*60,y=92-h;sv+=i==9?`<rect x="${x+14}" y="12" width="26" height="80" fill="#151515"/><path d="M${x+10} 12L${x+27} 0L${x+44} 12Z" fill="#151515"/>`:`<rect x="${x+4}" y="${y}" width="52" height="${h}" fill="#151515"/>`});
sv+='<rect y="90" width="1200" height="2" fill="#FF5B14"/>';$("#sk").innerHTML=sv;
const det=e=>`<p>${e[2]}</p>${chips(e[3])}${e[4].length?`<p class="mo se">Seen in · ${e[4].join(" · ")}</p>`:""}`;
$("#xl").innerHTML=EX.map((e,i)=>`<div class="xi"><button aria-expanded="false" data-i="${i}"><i>${pad(i)}</i><h3>${e[1]}</h3><b aria-hidden="true">→</b></button><div class="xd">${det(e)}</div></div>`).join("");
function setX(i){const e=EX[i];document.querySelectorAll(".xi").forEach((n,k)=>{n.classList.toggle("on",k==i);n.firstChild.setAttribute("aria-expanded",k==i)});$("#xp").innerHTML=`<div class="xbig">${pad(i)}</div><svg class="xic" viewBox="0 0 24 24" aria-hidden="true"><path d="${IC[e[0]]}"/></svg><h3>${e[1]}</h3>${det(e)}`}
$("#xl").onclick=e=>{const b=e.target.closest("button");if(b)setX(+b.dataset.i)};
$("#xl").onmouseover=e=>{const b=e.target.closest("button");if(b&&innerWidth>1100)setX(+b.dataset.i)};setX(0);
const SU=["♠","♥","♦","♣"],RK=["A","K","Q","J"];
$("#hand").innerHTML=ST.map((s,i)=>`<button class="cdk" data-i="${i}" aria-pressed="false" style="--r:${(i-1.5)*9}deg;--x:${Math.abs(i-1.5)*9}px"><span class="cn${i%2?" rd":""}">${RK[i]}<br>${SU[i]}</span><span class="cm${i%2?" rd":""}" aria-hidden="true">${SU[i]}</span><b>${s[0]}</b><small>${s[2].length} tools</small><span class="cn fl${i%2?" rd":""}" aria-hidden="true">${RK[i]}<br>${SU[i]}</span></button>`).join("");
const HN=["Straight flush","Four of a kind","Full house","Royal flush"],RN=["A","K","Q","J","10","9","8","7"],sm=(a,b)=>{a=a.toLowerCase();b=b.toLowerCase();return a==b||b.startsWith(a+" ")};
function setC(i){document.querySelectorAll(".cdk").forEach((b,k)=>b.setAttribute("aria-pressed",k==i));const s=ST[i],n=s[2].length,rd=i%2?" rd":"";
$("#tbl").innerHTML=`<div class="dh"><p class="mo or">${SU[i]} ${s[0]} · ${s[1]}</p><p class="mo dn">${n} cards · ${HN[i]}</p></div><div class="dk">${s[2].map((x,k)=>{const u=PR.filter(p=>p.t.some(t=>sm(x,t))).map(p=>p.n);return `<div class="dc${rd}" tabindex="0" style="--r:${(k%2?1:-1)*(.6+k%3*.7)}deg;--d:${k*90}ms"><span class="dr">${RN[k%8]}<br>${SU[i]}</span><span class="dp" aria-hidden="true">${SU[i]}</span><b>${x}</b>${u.length?`<a class="du" href="#projects" title="Used in ${esc(u.join(", "))}">↳ ${esc(u[0])}${u.length>1?" +"+(u.length-1):""}</a>`:`<span class="du"></span>`}<span class="dr fl2" aria-hidden="true">${RN[k%8]}<br>${SU[i]}</span></div>`}).join("")}</div>`}
$("#hand").onclick=e=>{const b=e.target.closest("button");if(b)setC(+b.dataset.i)};setC(0);
const GAL=(p,i)=>`<div class="gal"><img class="s" src="${p.imgs[0]}" alt="${p.n} website screenshot" loading="lazy"><div class="th">${p.imgs.map((_,k)=>`<button data-g="${i}:${k}" aria-label="Screenshot ${k+1}" aria-pressed="${k==0}">${k+1}</button>`).join("")}</div></div>`;
let pf="All";function drawP(){$("#fl").innerHTML=["All","Web","Software","Media"].map(k=>`<button aria-pressed="${k==pf}" data-k="${k}">${k}</button>`).join("");
$("#tk").innerHTML=PR.filter(p=>pf=="All"||p.c==pf).map(p=>{const i=PR.indexOf(p),v=p.imgs?GAL(p,i):p.img?`<img class="s" src="${p.img}" alt="${p.n} screenshot" loading="lazy">`:`<div class="mk" style="--c:${p.k}"><i></i><i></i><i></i></div>`;
return `<article class="pj${p.x?" f":""}" style="--c:${p.k}">${v}<div class="pb"><span class="nn">${pad(i)}</span><span class="mo" style="color:${p.k}">${p.c} · ${p.s}</span><h3>${p.n}</h3><p>${p.d}</p><dl class="meta"><dt>Features</dt><dd>${p.f}</dd></dl>${chips(p.t)}<div class="lk">${p.u?`<a href="${p.u}" target="_blank" rel="noopener noreferrer">View project ↗</a>`:""}${p.g?`<a href="${p.g}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`:""}</div></div></article>`}).join("")}
$("#fl").onclick=e=>{if(e.target.dataset.k){pf=e.target.dataset.k;drawP();$("#tk").scrollLeft=0;$("#fl [aria-pressed=true]").focus()}};drawP();
$("#tk").addEventListener("click",e=>{const b=e.target.closest("[data-g]");if(!b)return;const[i,k]=b.dataset.g.split(":"),c=b.closest(".gal");c.querySelector("img").src=PR[i].imgs[k];c.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x==b))});
$("#pv").onclick=()=>$("#tk").scrollBy({left:-420,behavior:"smooth"});$("#nx").onclick=()=>$("#tk").scrollBy({left:420,behavior:"smooth"});
$("#mn").innerHTML=SV.map(s=>`<li><h3>${s[0]}</h3><span class="ld"></span><p>${s[1]}</p></li>`).join("");
$("#so").innerHTML=SOC.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener noreferrer">${s[0]} ↗</a>`).join("");
$("#cm").innerHTML=EMAIL?`<span class="mo" style="font-size:1rem;font-weight:700">${esc(EMAIL)}</span> · <a class="mo" style="text-decoration:underline" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=${encodeURIComponent(EMAIL)}" target="_blank" rel="noopener noreferrer">Write in Gmail ↗</a>`:'<p style="max-width:400px;font-weight:600">Websites, software or data work: tell me what you’re building.</p>';
$("#yr").textContent=new Date().getFullYear();
const clk=()=>{$("#cl").textContent=new Date().toLocaleTimeString("en-GB",{timeZone:"Africa/Nairobi",hour:"2-digit",minute:"2-digit"})};clk();setInterval(clk,30000);
const L="$ whoami\nnimson_muriuki\n$ location\nNairobi, Kenya\n$ stack\nNext.js · React · Java · Python · SQL\n$ status\nopen to collaborate ●";
if(mq)$("#tp").textContent=L;else{let i=0;const t=setInterval(()=>{$("#tp").textContent=L.slice(0,++i)+"▌";if(i>=L.length){clearInterval(t);$("#tp").textContent=L}},38)}
const hero=$("#home");if(!mq)hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5)*2);hero.style.setProperty("--my",((e.clientY-r.top)/r.height-.5)*2)},{passive:true});
document.querySelectorAll("[data-from]").forEach(i=>{i.src=document.querySelector(i.dataset.from).src});
const mb=$("#mb"),no=$("#nvo");mb.onclick=()=>{const o=no.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"CLOSE":"MENU"};
no.onclick=e=>{if(e.target.tagName=="A"){no.classList.remove("open");mb.textContent="MENU";mb.setAttribute("aria-expanded",false)}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.05});
document.querySelectorAll(".rv").forEach(x=>io.observe(x));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$("#pl").querySelectorAll("a").forEach(a=>a.toggleAttribute("aria-current",a.getAttribute("href")=="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(s=>so.observe(s));
const XP=[{k:"Independent Projects · Nairobi, Kenya",t:"Independent Software Developer",p:"Developing web applications and digital platforms, working across frontend interfaces, backend functionality, databases and deployment.",g:["Next.js","React","JavaScript","SQL","Drizzle ORM"],s:"Project-based",c:"#FF5B14"},
{k:"Nim Creative Agencies",t:"Creative Entrepreneur",p:"Exploring digital business opportunities, developing creative ideas, building brand identities and working on business-focused digital solutions.",g:["Brand identity","Digital business","Creative direction"],s:"Entrepreneurship",c:"#4F7CFF"},
{k:"Personal & Independent Projects",t:"Web Development Projects",p:"Designing, developing and improving web-based platforms, including e-commerce, business management and digital service concepts.",g:["E-commerce","Business management","Digital services"],s:"Practical experience",c:"#4F7CFF",im:PR.find(p=>p.n=="AutoPlugKe").imgs[0]},
{k:"Attended",t:"GITEX Kenya 2026",p:"Technology expo in Nairobi.",g:["Tech event","Nairobi"],s:"2026",im:document.querySelector("#about .tp img").src},
{k:"Next",t:"Your project",p:"Let’s add the next entry together.",g:["Web","Software","Data"],s:"Open",c:"#FF5B14",cta:1}];
const LH=s=>{let h=5381;for(const c of s)h=((h<<5)+h+c.charCodeAt(0))>>>0;return h.toString(16).padStart(8,"0").slice(0,7)};
const mlg=XP.slice();mlg.unshift(mlg.pop());
const LN=["","","mlg-bs","mlg-be",""],LB=["HEAD → main","","feature/creative","feature/creative",""];
$("#xa").className="mlg-x";
$("#xa").innerHTML=`<p class="mlg-cap" aria-hidden="true"><span>~/nimson <b>$</b> git log --graph --oneline</span></p><ol class="mlg-l">${mlg.map((x,k)=>{const br=LN[k],head=k==0;return `<li class="mlg-i${br?" mlg-br "+br:""}${head?" mlg-hd":""}" style="--c:${x.c||"#EDE8DF"};--n:${k}"><span class="mlg-ln"></span>${br=="mlg-bs"?'<span class="mlg-cv"></span>':""}${br=="mlg-be"?'<span class="mlg-cv"></span>':""}<span class="mlg-nd"></span><article class="mlg-k"><div class="mlg-top"><code>${LH(x.t)}</code>${LB[k]?`<em>${LB[k]}</em>`:""}<span>${x.s}</span></div><h3>${x.t}</h3><p class="mlg-pl">${x.k}</p><div class="mlg-bd"><div><p>${x.p}</p><div class="mlg-df">${x.g.map(y=>`<span>${y}</span>`).join("")}</div>${x.cta?'<a class="btn o" href="#contact">Start a project →</a>':""}</div>${x.im?`<img src="${x.im}" alt="">`:""}</div></article></li>`}).join("")}</ol><p class="mlg-ft" aria-hidden="true"><i></i>main <span>·</span> ${mlg.length} commits <span>·</span> working tree clean</p>`;
if(!mq)new IntersectionObserver((es,ob)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("run");ob.unobserve(e.target)}}),{threshold:.15}).observe($("#xa"));
const TESTI=[]; // add real ones: {q:"quote",n:"Name",r:"Role"}
$("#tq").innerHTML=(TESTI.length?`<div class="qt" style="margin-top:34px">${TESTI.map(t=>`<figure class="qc"><span class="qm">“</span><blockquote>${esc(t.q)}</blockquote><figcaption><b>${esc(t.n)}</b> ${esc(t.r||"")}</figcaption></figure>`).join("")}</div>`:"")+`<form class="pcd" id="tf" novalidate><div class="pcl"><span class="mo">Postcard · Nairobi, Kenya</span><textarea name="tm" rows="6" placeholder="Dear Nimson, …" aria-label="Your words"></textarea></div><div class="pcr"><div class="stp" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#0a0a0a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6.5L20.5 7"/></svg></div><div class="pm" aria-hidden="true"></div><p class="to">To: <b>Nimson Muriuki</b><br>Nairobi, Kenya</p><label class="mo">From<input name="tn" autocomplete="name" placeholder="Your name"></label><label class="mo">Role or company<input name="tr" placeholder="Optional"></label><label class="mo">Email <span style="text-transform:none;letter-spacing:0;opacity:.6">(optional)</span><input name="temail" type="email" autocomplete="email" placeholder="you@example.com"></label><span class="err" id="te" role="status"></span><button class="btn" type="submit">Send postcard →</button></div></form>`;
$("#tf").addEventListener("submit",async ev=>{ev.preventDefault();const f=ev.target,v=k=>f.elements[k].value.trim(),e=$("#te"),btn=f.querySelector('button[type="submit"]');const name=v("tn"),msg=v("tm"),role=v("tr"),email=v("temail");e.className="err";if(name.length<2||msg.length<10){e.textContent="Add your name and a few words (10+ characters).";return}if(email&&!EM.test(email)){e.textContent="That email address doesn’t look right.";f.elements.temail.focus();return}const body=msg+"\n\n"+name+(role?" · "+role:"");btn.disabled=true;btn.textContent="Sending…";const r=await sendContact({type:"postcard",name,email,role,subject:"Testimonial for Nimson",message:msg});btn.disabled=false;btn.textContent="Send postcard →";if(r.ok){f.reset();e.className="sendbox sent-ok";e.textContent="✓ Postcard sent. Thank you, "+name+" — it’s on its way to Nimson’s inbox.";return}sendBox(e,"Testimonial for Nimson",body,r.code=="not_configured"?"Direct sending isn’t set up on this server yet, so choose how to send it:":(r.error||"Couldn’t send it directly, so choose how to send it:"))});
const pl=$("#pl"),ind=$("#ind"),pls=[...pl.querySelectorAll("a")],cur=()=>pls.find(a=>a.hasAttribute("aria-current"));
function place(a){pls.forEach(x=>x.classList.toggle("on",x==a));if(a){ind.style.opacity=1;ind.style.width=a.offsetWidth+"px";ind.style.transform=`translateX(${a.offsetLeft}px)`}else ind.style.opacity=0}
pl.addEventListener("mouseover",e=>{const a=e.target.closest("a");if(a)place(a)});pl.addEventListener("mouseleave",()=>place(cur()));
pl.addEventListener("focusin",e=>place(e.target.closest("a")));pl.addEventListener("focusout",()=>place(cur()));
new MutationObserver(()=>place(cur())).observe(pl,{attributes:true,subtree:true,attributeFilter:["aria-current"]});place(cur());document.fonts&&document.fonts.ready.then(()=>place(cur()));
const hd=$("#hd");let ly=0;addEventListener("scroll",()=>{const y=scrollY,H=document.documentElement;H.style.setProperty("--pg",(y/(H.scrollHeight-innerHeight)*100)+"%");hd.classList.toggle("hide",y>ly&&y>160&&!$("#nvo").classList.contains("open"));ly=y},{passive:true});
const mg=$("#mg");if(!mq&&matchMedia("(pointer:fine)").matches){mg.addEventListener("pointermove",e=>{const r=mg.getBoundingClientRect();mg.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.4}px)`});mg.addEventListener("pointerleave",()=>mg.style.transform="")}
const clk2=()=>{const t=new Date().toLocaleTimeString("en-GB",{timeZone:"Africa/Nairobi",hour:"2-digit",minute:"2-digit"});["#cl3","#cl4","#cl5"].forEach(s=>{const e=$(s);if(e)e.textContent=t})};clk2();setInterval(clk2,30000);
$("#fname").innerHTML=[..."Nimson Muriuki"].map(c=>c==" "?'<span style="width:.28em"></span>':`<span>${c}</span>`).join("");
$("#fsoc").innerHTML=(EMAIL?'<a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to='+EMAIL+'" target="_blank" rel="noopener noreferrer">Email ↗</a>':"")+SOC.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener noreferrer">${s[0]} ↗</a>`).join("");
async function sendContact(data){try{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)};if(typeof AbortSignal!="undefined"&&AbortSignal.timeout)o.signal=AbortSignal.timeout(15000);const r=await fetch("/api/contact",o);let j={};try{j=await r.json()}catch(x){}return{ok:r.ok&&j.ok===true,code:j.code||"",error:j.error||""}}catch(x){return{ok:false,code:"network",error:"Couldn’t reach the server."}}}
function sendBox(el,subject,body,note){const g="https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(EMAIL)+"&su="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body),m="mailto:"+EMAIL+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
el.className="sendbox";el.textContent="";const p=document.createElement("span");p.textContent=note||("Ready. Choose how to send it to "+EMAIL+":");const w=document.createElement("span");w.className="sbt";
const A=(t,u)=>{const a=document.createElement("a");a.className="btn";a.href=u;a.target="_blank";a.rel="noopener noreferrer";a.textContent=t;return a};
const c=document.createElement("button");c.type="button";c.className="btn";c.textContent="Copy message";
c.onclick=async()=>{const t="To: "+EMAIL+"\nSubject: "+subject+"\n\n"+body;try{await navigator.clipboard.writeText(t);c.textContent="Copied ✓"}catch(x){const ta=document.createElement("textarea");ta.readOnly=true;ta.value=t;ta.rows=5;el.appendChild(ta);ta.select();c.textContent="Copy it from the box"}};
w.append(A("Open in Gmail ↗",g),A("Email app ↗",m),c);el.append(p,w)}
(()=>{const f=$("#f"),body=f.querySelector(".cf-body"),done=$("#ok"),go=$("#sd"),lab=go.firstElementChild,ct=$("#cf-ct");
const V={n:v=>v.length>1||"Please enter your name.",e:v=>EM.test(v)||"Enter a valid email address.",m:v=>v.length>9||"Tell me a little more (10+ characters)."};
const val=k=>{const el=f.elements[k],r=V[k](el.value.trim()),ok=r===true;el.setAttribute("aria-invalid",String(!ok));el.closest(".cf-f").querySelector(".err").textContent=ok?"":r;return ok};
["n","e","m"].forEach(k=>{const el=f.elements[k];el.addEventListener("blur",()=>{if(el.value.trim())val(k)});el.addEventListener("input",()=>{if(el.getAttribute("aria-invalid")=="true")val(k)})});
f.elements.m.addEventListener("input",e=>{ct.textContent=e.target.value.length+" / 1000"});
const mk=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const topicOf=()=>(f.querySelector("[name=t]:checked")||{}).value||"";
function show(sent,note){const v=k=>f.elements[k].value.trim(),topic=topicOf();
const su=v("s")||(topic?topic+" inquiry":"Hello from your portfolio"),bd=(topic?"Topic: "+topic+"\n\n":"")+v("m")+"\n\n"+v("n")+" ("+v("e")+")";
done.textContent="";const ic=mk("div","cf-ic");ic.innerHTML='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0a0a0a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const h=mk("h3","",sent?"Message sent.":"Your message is ready.");h.tabIndex=-1;
const sum=mk("dl","cf-sum");[["To",EMAIL],["Subject",su],["Message",bd]].forEach(([k,x])=>{sum.append(mk("dt","",k),mk("dd","",x))});
const row=mk("div","cf-acts");
if(sent){
const again=mk("button","cf-b p","Send another message");again.type="button";
again.onclick=()=>{done.hidden=true;body.hidden=false;f.reset();ct.textContent="0 / 1000";["n","e","m"].forEach(k=>f.elements[k].removeAttribute("aria-invalid"));f.querySelectorAll(".cf-f .err").forEach(x=>x.textContent="");f.elements.n.focus()};
row.append(again);
done.append(ic,h,mk("p","cf-note",note||("Thanks, "+v("n")+". Your message landed in Nimson’s inbox — he’ll reply to "+v("e")+".")),sum,row);
}else{
const g="https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(EMAIL)+"&su="+encodeURIComponent(su)+"&body="+encodeURIComponent(bd),
ml="mailto:"+EMAIL+"?subject="+encodeURIComponent(su)+"&body="+encodeURIComponent(bd);
const A=(t,u,p)=>{const a=mk("a","cf-b"+(p?" p":""),t);a.href=u;a.target="_blank";a.rel="noopener noreferrer";return a};
const cp=mk("button","cf-b","Copy message");cp.type="button";
cp.onclick=async()=>{const t="To: "+EMAIL+"\nSubject: "+su+"\n\n"+bd;try{await navigator.clipboard.writeText(t);cp.textContent="Copied ✓"}catch(x){const ta=mk("textarea","cf-ta");ta.readOnly=true;ta.value=t;ta.rows=5;done.append(ta);ta.select();cp.textContent="Copy it from the box"}};
row.append(A("Open in Gmail ↗",g,1),A("Email app ↗",ml),cp);
const ed=mk("button","cf-edit","← Edit message");ed.type="button";ed.onclick=()=>{done.hidden=true;body.hidden=false;f.elements.m.focus()};
done.append(ic,h,mk("p","cf-note",note||"Choose where to send it from. Nothing leaves your device until you press send there."),sum,row,ed)}
body.hidden=true;done.hidden=false;h.focus({preventScroll:true});if(!mq)done.scrollIntoView({block:"center",behavior:"smooth"})}
f.addEventListener("submit",async ev=>{ev.preventDefault();if(f.elements.hp.value)return;
const bad=["n","e","m"].filter(k=>!val(k));if(bad.length){f.elements[bad[0]].focus();return}
if(!EMAIL){lab.textContent="Contact email isn’t configured yet";return}
go.disabled=true;lab.textContent="Sending…";
const v=k=>f.elements[k].value.trim(),topic=topicOf();
const r=await sendContact({type:"message",name:v("n"),email:v("e"),subject:v("s"),topic,message:v("m")});
go.disabled=false;lab.textContent="Send message";
if(r.ok){show(true);return}
show(false,r.code=="not_configured"?"Direct sending isn’t set up on this server yet. Your message is ready to send with Gmail or your email app below.":(r.error||"The message couldn’t be sent directly. Choose how to send it below."))})})();
