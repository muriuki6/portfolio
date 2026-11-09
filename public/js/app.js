const EMAIL="nimmuriuki6@gmail.com",EM=/^[^\s@<>()",;:\\]+@[^\s@<>()",;:\\]+\.[^\s@<>()",;:\\]+$/;
const SOC=[["WhatsApp","https://wa.me/254769720655","whatsapp"],["Telegram","https://t.me/nimmuriuki","telegram"],["LinkedIn","","linkedin"],["Instagram","https://instagram.com/void.nim","instagram"],["X","https://x.com/dfw_nim","x"],["Facebook","https://www.facebook.com/MuriukiNim/","facebook"],["GitHub","https://github.com/muriuki6","github"]].filter(s=>s[1]);
const SI={whatsapp:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",telegram:"M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",linkedin:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",instagram:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",x:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",facebook:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",github:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",email:"M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 6.48a1 1 0 001.2 0L20 8.24V18H4z"};
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
{n:"Mkenya Asili",c:"Web",s:"Project",k:"#FF5B14",m:"MA",y:"E-commerce platform",
 d:"A Kenyan artisan e-commerce platform for authentic handmade products, connecting artisans with customers through a modern shopping experience.",
 b:"Built around authentic handmade Kenyan products: a place where artisans’ work can be found and a shopping experience that feels modern to the customer.",
 w:[["Collections","Products grouped so they are easy to browse"],["Accounts","Customer accounts"],["Product management","Adding and updating listings"],["Galleries","More than one view of each product"],["Admin dashboard","One place to run the store"]],
 t:["Next.js","React","Drizzle ORM","Turso","SQLite"],g:"https://github.com/muriuki6/mkenya-asili"},
{n:"AutoPlugKe",c:"Web",s:"Project",k:"#00a3a3",m:"AP",y:"Car dealership website",
 d:"A car dealership website for Auto Plug Kenya with a searchable vehicle inventory, detailed vehicle listings and a services section covering imports, financing, trade-ins and inspections.",
 b:"A website for Auto Plug Kenya that lets a buyer search the inventory, open a detailed listing and see the services behind the sale in one place.",
 w:[["Inventory search and filters","Narrow the stock down to what a buyer wants"],["Vehicle listings","A detailed page for each vehicle"],["Services pages","Imports, financing, trade-ins and inspections"]],
 t:["Web development","UI design","Automotive"]},
{n:"FitPro Gym Management",c:"Software",s:"Project",k:"#4F7CFF",m:"FP",y:"Gym management system",
 d:"A gym management system supporting digital administration, with dynamic charts.",
 b:"A database-driven system that moves a gym’s administration onto the screen and turns its numbers into charts that update as the data changes.",
 w:[["Administration","Digital management of the gym"],["Dynamic charts","Built with Chart.js"],["AJAX","Updates without reloading the whole page"]],
 t:["PHP","MySQL","Bootstrap 5","Chart.js"]},
{n:"Magical Flix",c:"Media",s:"Project",k:"#e8a33d",m:"MF",y:"Tourism and storytelling platform",
 d:"A working Kenya tourism and storytelling platform: destinations, wildlife, reels and local creators.",
 b:"A live platform for telling Kenya’s story through the places people visit, the wildlife they hope to see and the creators who live it.",
 w:[["Guides","Destinations and wildlife"],["Reels","Short visual stories"],["Stories","Told by local creators"]],
 t:["Web platform","Media"]},
{n:"TradeNex",c:"Software",s:"Concept",k:"#3ddc97",m:"TN",y:"Trading interface concept",
 d:"A premium trading interface concept: a design exploration, not a licensed financial service.",
 b:"A design exploration of how a premium trading screen could look and feel. It is an interface study only and does not trade or handle money.",
 w:[["Trading UI","The core trading screen"],["Dashboards","Overview panels for the numbers"]],
 t:["Fintech","UI design"]}];
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
const PS={"Project":"Built project","Concept":"Concept","In development":"In development"};
const fn=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".md";
let pf="All",pi=0;
const edDoc=p=>`<div class="ed-tabs mo"><span class="ed-tab"><b>M↓</b>${fn(p.n)}</span><span class="ed-tab dim">README preview</span></div>
<article class="ed-doc" id="ed-doc" role="tabpanel" aria-label="${p.n}">
<h3 class="ed-h1"><span aria-hidden="true">#</span>${p.n}</h3>
<div class="ed-bg"><span><b>status</b><em>${PS[p.s]}</em></span><span><b>type</b><em>${p.y}</em></span><span><b>category</b><em>${p.c}</em></span></div>
<blockquote>${p.d}</blockquote>
<p class="ed-p">${p.b}</p>
${p.s=="Concept"?`<div class="ed-note"><b class="mo">Note</b>This is a concept, not a live product.</div>`:""}
<h4 class="ed-h2"><span aria-hidden="true">##</span>What’s inside</h4>
<ul class="ed-ck">${p.w.map(x=>`<li><i aria-hidden="true"></i><div><b>${x[0]}</b><span>${x[1]}</span></div></li>`).join("")}</ul>
<h4 class="ed-h2"><span aria-hidden="true">##</span>Built with</h4>
<pre class="ed-code"><code><span class="k">stack</span>  <span class="o">=</span> <span class="o">[</span>${p.t.map(x=>`<span class="s">"${x}"</span>`).join('<span class="o">,</span> ')}<span class="o">]</span>
<span class="k">status</span> <span class="o">=</span> <span class="s">"${PS[p.s]}"</span></code></pre>
${p.u||p.g?`<h4 class="ed-h2"><span aria-hidden="true">##</span>Links</h4><div class="lk">${p.u?`<a href="${p.u}" target="_blank" rel="noopener noreferrer">View project ↗</a>`:""}${p.g?`<a href="${p.g}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`:""}</div>`:""}
</article>`;
const edSb=p=>`<span>⎇ main</span><span><i></i>${PS[p.s]}</span><span>${p.c}</span><span class="r">Markdown</span>`;
function edShow(i){pi=i;const p=PR[i];$("#tk .ed").style.setProperty("--c",p.k);
$("#tk .ed-f").parentElement.querySelectorAll(".ed-f").forEach(b=>b.setAttribute("aria-selected",+b.dataset.i==i));
$("#tk .ed-main").innerHTML=edDoc(p);$("#ed-sb").innerHTML=edSb(p);$("#ed-ttl").textContent="~/nimson/projects/"+fn(p.n)}
function drawP(){const L=PR.filter(p=>pf=="All"||p.c==pf);if(!L.includes(PR[pi]))pi=PR.indexOf(L[0]);
$("#fl").innerHTML=["All","Web","Software","Media"].map(k=>`<button aria-pressed="${k==pf}" data-k="${k}">${k}</button>`).join("");
$("#tk").innerHTML=`<div class="ed" style="--c:${PR[pi].k}"><div class="ed-bar"><i></i><i></i><i></i><span class="mo" id="ed-ttl"></span></div>
<div class="ed-bd"><nav class="ed-sd" role="tablist" aria-label="Projects" aria-orientation="vertical"><p class="mo">Explorer</p><p class="mo ed-dir">▾ projects</p>${L.map(p=>`<button class="ed-f" type="button" role="tab" data-i="${PR.indexOf(p)}" aria-selected="false" style="--k:${p.k}"><b class="mo">M↓</b><span>${fn(p.n)}</span><i></i></button>`).join("")}</nav><div class="ed-main"></div></div>
<div class="ed-sb mo" id="ed-sb"></div></div>`;edShow(pi)}
$("#fl").onclick=e=>{if(e.target.dataset.k){pf=e.target.dataset.k;drawP();$("#fl [aria-pressed=true]").focus()}};drawP();
$("#tk").addEventListener("click",e=>{const b=e.target.closest(".ed-f");if(b)edShow(+b.dataset.i)});
$("#tk").addEventListener("keydown",e=>{const b=e.target.closest(".ed-f");if(!b||!/^Arrow(Up|Down)$/.test(e.key))return;e.preventDefault();const f=[...$("#tk").querySelectorAll(".ed-f")],n=f[(f.indexOf(b)+(e.key=="ArrowDown"?1:f.length-1))%f.length];edShow(+n.dataset.i);n.focus()});
$("#mn").innerHTML=SV.map(s=>`<li><h3>${s[0]}</h3><span class="ld"></span><p>${s[1]}</p></li>`).join("");
const socA=(l,u,i)=>`<a class="cf-s" href="${u}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${SI[i]}"/></svg><span>${l}</span></a>`;
$("#cf-soc").innerHTML=(EMAIL?socA("Email",`https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=${encodeURIComponent(EMAIL)}`,"email"):"")+SOC.map(s=>socA(s[0],s[1],s[2])).join("");
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
{k:"Personal & Independent Projects",t:"Web Development Projects",p:"Designing, developing and improving web-based platforms, including e-commerce, business management and digital service concepts.",g:["E-commerce","Business management","Digital services"],s:"Practical experience",c:"#4F7CFF",im:"img/photo-7.jpg"},
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
$("#tf").addEventListener("submit",async ev=>{ev.preventDefault();const f=ev.target,v=k=>f.elements[k].value.trim(),e=$("#te"),btn=f.querySelector('button[type="submit"]');const name=v("tn"),msg=v("tm"),role=v("tr"),email=v("temail");e.className="err";if(name.length<2||msg.length<10){e.textContent="Add your name and a few words (10+ characters).";return}if(email&&!EM.test(email)){e.textContent="That email address doesn’t look right.";f.elements.temail.focus();return}const body=msg+"\n\n"+name+(role?" · "+role:"");btn.disabled=true;btn.textContent="Sending…";const r=await sendContact({type:"postcard",name,email,role,subject:"Testimonial for Nimson",message:msg});btn.disabled=false;btn.textContent="Send postcard →";if(r.ok){f.reset();e.className="sendbox sent-ok";e.textContent="✓ Postcard sent. Thank you, "+name+" — it’s on its way to Nimson’s inbox.";return}sendBox(e,"Testimonial for Nimson",body,r.code=="not_configured"?"Sending isn’t set up on this server yet. Please try again later.":(r.error||"The postcard couldn’t be sent right now. Please try again."))});
const pl=$("#pl"),ind=$("#ind"),pls=[...pl.querySelectorAll("a")],cur=()=>pls.find(a=>a.hasAttribute("aria-current"));
function place(a){pls.forEach(x=>x.classList.toggle("on",x==a));if(a){ind.style.opacity=1;ind.style.width=a.offsetWidth+"px";ind.style.transform=`translateX(${a.offsetLeft}px)`}else ind.style.opacity=0}
pl.addEventListener("mouseover",e=>{const a=e.target.closest("a");if(a)place(a)});pl.addEventListener("mouseleave",()=>place(cur()));
pl.addEventListener("focusin",e=>place(e.target.closest("a")));pl.addEventListener("focusout",()=>place(cur()));
new MutationObserver(()=>place(cur())).observe(pl,{attributes:true,subtree:true,attributeFilter:["aria-current"]});place(cur());document.fonts&&document.fonts.ready.then(()=>place(cur()));
const hd=$("#hd");let ly=0;addEventListener("scroll",()=>{const y=scrollY,H=document.documentElement;H.style.setProperty("--pg",(y/Math.max(1,H.scrollHeight-innerHeight)*100)+"%");hd.classList.toggle("hide",y>ly&&y>160&&!$("#nvo").classList.contains("open"));ly=y},{passive:true});
const mg=$("#mg");if(!mq&&matchMedia("(pointer:fine)").matches){mg.addEventListener("pointermove",e=>{const r=mg.getBoundingClientRect();mg.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.4}px)`});mg.addEventListener("pointerleave",()=>mg.style.transform="")}
const clk2=()=>{const t=new Date().toLocaleTimeString("en-GB",{timeZone:"Africa/Nairobi",hour:"2-digit",minute:"2-digit"});["#cl3","#cl4","#cl5"].forEach(s=>{const e=$(s);if(e)e.textContent=t})};clk2();setInterval(clk2,30000);
$("#fname").innerHTML=[..."Nimson Muriuki"].map(c=>c==" "?'<span style="width:.28em"></span>':`<span>${c}</span>`).join("");
$("#fsoc").innerHTML=(EMAIL?'<a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to='+EMAIL+'" target="_blank" rel="noopener noreferrer">Email ↗</a>':"")+SOC.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener noreferrer">${s[0]} ↗</a>`).join("");
async function sendContact(data){try{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)};if(typeof AbortSignal!="undefined"&&AbortSignal.timeout)o.signal=AbortSignal.timeout(15000);const r=await fetch("/api/contact",o);let j={};try{j=await r.json()}catch{}return{ok:r.ok&&j.ok===true,code:j.code||"",error:j.error||""}}catch{return{ok:false,code:"network",error:"Couldn’t reach the server."}}}
function sendBox(el,subject,body,note){el.className="sendbox";el.textContent="";const p=document.createElement("span");p.textContent=note||"The postcard couldn’t be sent right now. Please try again.";const w=document.createElement("span");w.className="sbt";
const c=document.createElement("button");c.type="button";c.className="btn";c.textContent="Copy message";
c.onclick=async()=>{const t="To: "+EMAIL+"\nSubject: "+subject+"\n\n"+body;try{await navigator.clipboard.writeText(t);c.textContent="Copied ✓"}catch{const ta=document.createElement("textarea");ta.readOnly=true;ta.value=t;ta.rows=5;el.appendChild(ta);ta.select();c.textContent="Copy it from the box"}};
w.append(c);el.append(p,w)}
(()=>{const f=$("#f"),body=f.querySelector(".cf-body"),done=$("#ok"),go=$("#sd"),lab=go.firstElementChild,ct=$("#cf-ct");
const V={n:v=>v.length>1||"Please enter your name.",e:v=>EM.test(v)||"Enter a valid email address.",m:v=>v.length>9||"Tell me a little more (10+ characters)."};
const val=k=>{const el=f.elements[k],r=V[k](el.value.trim()),ok=r===true;el.setAttribute("aria-invalid",String(!ok));el.closest(".cf-f").querySelector(".err").textContent=ok?"":r;return ok};
["n","e","m"].forEach(k=>{const el=f.elements[k];el.addEventListener("blur",()=>{if(el.value.trim())val(k)});el.addEventListener("input",()=>{if(el.getAttribute("aria-invalid")=="true")val(k)})});
f.elements.m.addEventListener("input",e=>{ct.textContent=e.target.value.length+" / 1000"});
const mk=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const topicOf=()=>(f.querySelector("[name=t]:checked")||{}).value||"";
function show(sent,note){const v=k=>f.elements[k].value.trim(),topic=topicOf();
const su=v("s")||(topic?topic+" inquiry":"Hello from your portfolio"),bd=(topic?"Topic: "+topic+"\n\n":"")+v("m")+"\n\n"+v("n")+" ("+v("e")+")";
done.textContent="";const ic=mk("div","cf-ic");ic.innerHTML=sent?'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0a0a0a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>':'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0a0a0a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>';
const h=mk("h3","",sent?"Message sent.":"Message not sent.");h.tabIndex=-1;
const sum=mk("dl","cf-sum");[["To",EMAIL],["Subject",su],["Message",bd]].forEach(([k,x])=>{sum.append(mk("dt","",k),mk("dd","",x))});
const row=mk("div","cf-acts");
if(sent){
const again=mk("button","cf-b p","Send another message");again.type="button";
again.onclick=()=>{done.hidden=true;body.hidden=false;f.reset();ct.textContent="0 / 1000";["n","e","m"].forEach(k=>f.elements[k].removeAttribute("aria-invalid"));f.querySelectorAll(".cf-f .err").forEach(x=>x.textContent="");f.elements.n.focus()};
row.append(again);
done.append(ic,h,mk("p","cf-note",note||("Thanks, "+v("n")+". Your message landed in Nimson’s inbox — he’ll reply to "+v("e")+".")),sum,row);
}else{
const retry=mk("button","cf-b p","Try again");retry.type="button";
retry.onclick=()=>{done.hidden=true;body.hidden=false;go.disabled=false;lab.textContent="Send message";f.requestSubmit()};
const ed=mk("button","cf-edit","← Edit message");ed.type="button";ed.onclick=()=>{done.hidden=true;body.hidden=false;f.elements.m.focus()};
row.append(retry);
done.append(ic,h,mk("p","cf-note",note||"The message couldn’t be sent right now. Please try again."),sum,row,ed)}
body.hidden=true;done.hidden=false;h.focus({preventScroll:true});if(!mq)done.scrollIntoView({block:"center",behavior:"smooth"})}
f.addEventListener("submit",async ev=>{ev.preventDefault();if(f.elements.hp.value)return;
const bad=["n","e","m"].filter(k=>!val(k));if(bad.length){f.elements[bad[0]].focus();return}
if(!EMAIL){lab.textContent="Contact email isn’t configured yet";return}
go.disabled=true;lab.textContent="Sending…";
const v=k=>f.elements[k].value.trim(),topic=topicOf();
const r=await sendContact({type:"message",name:v("n"),email:v("e"),subject:v("s"),topic,message:v("m")});
go.disabled=false;lab.textContent="Send message";
if(r.ok){show(true);return}
show(false,r.code=="not_configured"?"Sending isn’t set up on this server yet. Please try again later.":(r.error||"The message couldn’t be sent right now. Please try again."))})})();

addEventListener("scroll",()=>$("#hd").classList.toggle("sc",scrollY>40),{passive:true});
(()=>{
const SEC=[["about","About"],["expertise","Expertise"],["stack","Stack"],["experience","Experience"],["projects","Projects"],["services","Services"],["testimonials","Reviews"],["contact","Contact"]];
const GM="https://mail.google.com/mail/?view=cm&fs=1&to="+EMAIL;
const sl=$("#sl"),kb=$("#kb"),pk=$("#pk"),inp=$("#pk-q"),list=$("#pk-l");
let last="";
function sync(){let c=["home","Top"];SEC.forEach(s=>{const e=document.getElementById(s[0]);if(e&&e.getBoundingClientRect().top<=innerHeight*.4)c=s});
const t=c[0]=="home"?"Top":c[1];if(t!=last){last=t;sl.textContent=t;sl.classList.remove("sw");void sl.offsetWidth;sl.classList.add("sw")}}
let tk=0;addEventListener("scroll",()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;sync()})},{passive:true});sync();
const ACT=[["Write me an email","↗",()=>open(GM,"_blank","noopener")],["Copy email address","⧉",b=>{navigator.clipboard&&navigator.clipboard.writeText(EMAIL);b.querySelector("small").textContent="Copied";return"stay"}],["Start a project","→",()=>{location.hash="#contact"}]];
let items=[],sel=0;
function build(f){f=(f||"").trim().toLowerCase();items=[];let h="";
const S=SEC.filter(s=>!f||s[1].toLowerCase().includes(f)),A=ACT.filter(a=>!f||a[0].toLowerCase().includes(f));
if(S.length){h+='<li class="pk-g">Jump to</li>';S.forEach(s=>{items.push(()=>{location.hash="#"+s[0]});h+=`<li><button type="button" role="option" data-i="${items.length-1}">${s[1]}<small>#${s[0]}</small></button></li>`})}
if(A.length){h+='<li class="pk-g">Actions</li>';A.forEach(a=>{items.push(a[2]);h+=`<li><button type="button" role="option" data-i="${items.length-1}"><em>${a[1]}</em>${a[0]}<small></small></button></li>`})}
list.innerHTML=h||'<li class="pk-e">Nothing matches that.</li>';sel=0;mark()}
function mark(){list.querySelectorAll("button").forEach((b,i)=>{b.setAttribute("aria-selected",i==sel);if(i==sel)b.scrollIntoView({block:"nearest"})})}
function run(b){if(!b)return;if(items[b.dataset.i](b)!="stay")close()}
function openP(){pk.classList.add("open");pk.setAttribute("aria-hidden","false");kb.setAttribute("aria-expanded","true");inp.value="";build();setTimeout(()=>inp.focus(),30)}
function close(){pk.classList.remove("open");pk.setAttribute("aria-hidden","true");kb.setAttribute("aria-expanded","false");kb.focus({preventScroll:true})}
const narrow=matchMedia("(max-width:1100px)"),lock=()=>{kb.disabled=narrow.matches;if(narrow.matches&&pk.classList.contains("open"))close()};
lock();narrow.addEventListener("change",lock);
kb.addEventListener("click",openP);
pk.addEventListener("click",e=>{if(e.target==pk)close();const b=e.target.closest("button");if(b)run(b)});
inp.addEventListener("input",()=>build(inp.value));
pk.addEventListener("keydown",e=>{const bs=[...list.querySelectorAll("button")];
if(e.key=="Escape"){e.preventDefault();close()}
else if(e.key=="ArrowDown"){e.preventDefault();sel=(sel+1)%bs.length;mark()}
else if(e.key=="ArrowUp"){e.preventDefault();sel=(sel-1+bs.length)%bs.length;mark()}
else if(e.key=="Enter"){e.preventDefault();run(bs[sel])}
else if(e.key=="Tab"){e.preventDefault();inp.focus()}});
addEventListener("keydown",e=>{const t=e.target,typing=t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
if((e.key=="k"||e.key=="K")&&(e.metaKey||e.ctrlKey)&&!narrow.matches){e.preventDefault();pk.classList.contains("open")?close():openP()}
else if(e.key=="/"&&!narrow.matches&&!typing&&!pk.classList.contains("open")){e.preventDefault();openP()}});
const k=$("#kb kbd");if(k)k.textContent=/Mac|iPhone|iPad/.test(navigator.platform)?"⌘K":"Ctrl K";
})();