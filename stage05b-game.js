(()=>{
"use strict";
const KEY="rabbit05b-game-v1";
const ASSET="assets/after-study/";
const ENTRY=location.pathname.endsWith("stage05b-preview.html")?"stage05b-preview.html":"index.html";
if(new URLSearchParams(location.search).get("reset")==="1") localStorage.removeItem(KEY);
const files={
 e01:"AUD_02.mp3",e02:"DOC_01.png",e03:"DOC_02.png",e04:"DOC_06.png",e05:"download.svg",e06:"DOC_03.png",e07:"AUD_03.mp3",e08:"AUD_01母带.mp3",e09:"DOC_04.png",e10:"DOC_05.png",e11:"DOC_07.png",
 floor:"下载.svg",p1:"evidence_photo_club_group_20231108.png",p2:"evidence_photo_club_activity_20231027.png",p3:"evidence_photo_script_work_20231030.png",p4:"evidence_photo_broadcast_equipment.png",p5:"evidence_photo_recording_session_20231101.png",p6:"evidence_photo_north_building_corridor.png",p7:"evidence_photo_old_equipment_room_door.png"
};
const url=k=>ASSET+encodeURIComponent(files[k]);
const evidence={
 E01:{title:"顾航手机录音（16秒）",source:"校友帖 / 手机源文件",kind:"audio",file:"e01",desc:"停电当晚的手机录音。能听见广播片段与“许知遥”这个名字，但上下文并不完整。"},
 E02:{title:"11月16日值班表",source:"广播站资料室",kind:"image",file:"e02",desc:"许知遥不在11月16日值班名单中。"},
 E03:{title:"11月3日退社通知",source:"广播站资料室",kind:"image",file:"e03",desc:"确认许知遥在事故前已经退出广播站。"},
 E04:{title:"20:38停电通知",source:"校务公开",kind:"image",file:"e04",desc:"北楼局部停电的时间记录。"},
 E05:{title:"备用广播线路图",source:"设施档案",kind:"image",file:"e05",desc:"说明停电时旧设备间仍可通过备用线路接入广播。"},
 E06:{title:"20:52救援记录",source:"保卫处附件",kind:"image",file:"e06",desc:"确认许知遥当晚从北楼三层旧设备间获救。"},
 E07:{title:"2023年传播版录音",source:"论坛旧帖",kind:"audio",file:"e07",desc:"流传最广的短音频，保留了异常片段，却缺失前后的应急求救语境。"},
 E08:{title:"广播站原始备份",source:"广播站备份目录",kind:"audio",file:"e08",desc:"完整保留当晚求救与广播接续语境。须先取得E01与E07，才能定位。"},
 E09:{title:"纸质值班日志",source:"广播站旧档案",kind:"image",file:"e09",desc:"记录宋栀在停电后启动备用线路求救。"},
 E10:{title:"公共工作站清理登记",source:"设备维护记录",kind:"image",file:"e10",desc:"记录周予安事后清理公共工作站音频与部分索引；不能据此认定他最早剪辑或传播。"},
 E11:{title:"设备维护备注",source:"设备维护记录",kind:"image",file:"e11",desc:"补充旧设备间与工作站的维护情况。"},
 E12:{title:"宋栀与许知遥的聊天记录",source:"获授权的当事人资料",kind:"text",desc:"许知遥请求不要公开被困与私人录音，宋栀答应保密。"},
 E13:{title:"栏目组成员历史",source:"广播站资料室",kind:"text",desc:"用于确认三人曾在同一栏目组，以及退社前后的成员变化。"},
 E14:{title:"站点所有者最终说明",source:"匿名档案站 / 最终说明",kind:"text",desc:"许知遥确认：她就是当晚广播里被叫到的人，并说明了建立档案站的原因。"}
};
const nodes={
 A01:{section:"校友网",title:"顾航：那晚我只录到了十几秒",lead:"一段被反复转发的手机录音，最初来自当晚留校的学生。",body:"顾航说明，录音开始时广播已经响了一会儿。他当时不知道北楼发生了什么，只保留了手机里最后十几秒。",ev:["E01"],links:["F03","C01","A02"]},
 A02:{section:"校务公开",title:"2023年11月16日北楼局部停电说明",lead:"公告记录了停电范围和时间。",body:"北楼在20:38发生局部停电。公告本身没有说明广播内容，也不能单独解释许知遥为何出现。",ev:["E04"],links:["A03","C02"]},
 A03:{section:"模拟地图 / 设施档案",title:"北楼三层与备用广播线路",lead:"将停电范围、旧设备间与广播线路叠加查看。",body:"旧设备间位于北楼三层。线路图显示，主电源中断时，特定接口仍可接入备用广播。",ev:["E05"],gallery:["floor","p4","p6","p7"],links:["B03","C02"]},
 F01:{section:"论坛",title:"“晚自习之后”的旧帖索引",lead:"搜索结果来自不同年份，标题中的推测不等于事实。",body:"有人把片段解释成恶作剧，也有人说广播是在求救。继续核对原始来源、时间与独立记录。",links:["F03","F02","A01"]},
 F02:{section:"广播站资料室",title:"成员、值班与退社记录",lead:"同一栏目组的历史资料，可以回答“为什么她不在名单上”。",body:"资料显示许知遥曾是栏目组成员，但在11月3日已经退社。11月16日值班表中没有她。",ev:["E02","E03","E13"],gallery:["p1","p2","p3","p5"],links:["B01","C02"]},
 F03:{section:"论坛音频帖",title:"2023年流传的“异常广播”片段",lead:"这不是原始母带。",body:"传播版只留下最容易引发误解的一小段。先保存它，再与独立来源的手机录音对照。",ev:["E07"],links:["A01","B03"]},
 B01:{section:"广播站档案馆",title:"纸质值班日志",lead:"纸面记录不等于公开帖，它保留了当晚操作顺序。",body:"日志记录停电后宋栀启动备用线路并发出求救。",ev:["E09"],links:["B02","B03"]},
 B02:{section:"设备维护档案",title:"工作站清理与维护记录",lead:"记录能说明做过什么，不能自动证明未记录的动机。",body:"登记显示周予安在事后清理公共工作站里的私人音频与部分索引。现有证据不足以认定他是最早剪辑或传播者。",ev:["E10","E11"],gallery:["p4","p6"],links:["B01","C02"]},
 B03:{section:"音频档案馆",title:"原始备份定位与对比",lead:"先收集两个独立传播来源，系统才会显示原始备份。",body:"E01与E07来自不同入口。两者都取得后，才能据其重合内容定位E08。",special:"compare",links:["F03","A01","C03"]},
 C01:{section:"来源详情",title:"顾航手机源文件说明",lead:"同一份E01的来源页，不会重复计为第二个独立证据。",body:"文件元信息与顾航说明指向同一部手机、同一段16秒录音。它能证明名字出现过，却不能独立还原完整广播。",ev:["E01"],links:["A01","B03"]},
 C02:{section:"事件档案",title:"救援记录与当事人授权资料",lead:"救援事实和保密请求来自不同材料，需要分别核对。",body:"20:52的救援记录确认许知遥从北楼三层旧设备间获救。获授权的聊天记录显示，她随后请求宋栀不要公开被困与私人录音，宋栀答应。",ev:["E06","E12"],links:["F02","B01","B02","C03"]},
 C03:{section:"核验台",title:"完成三项交叉核验",lead:"选择结论并勾选真正支持它的证据。错误不会清空调查进度。",body:"人物状态、音频语境与三人行动必须分别核验。三项都通过后，最终说明与两种归档方式才会开放。",special:"quiz",links:["F02","B03","C02"]}
};
const questions={
 Q1:{title:"Q1｜许知遥为什么不在值班表上，却在当晚事件中出现？",answers:["她仍是值班成员，只是漏填了名字","她已于11月3日退社；11月16日是作为被困者出现","她从未加入广播站"],correct:1,required:["E03","E06"],hint:"需要同时证明事故前的成员状态与当晚身份；仅有值班表不足。"},
 Q2:{title:"Q2｜传播版录音与原始备份的关键差异是什么？",answers:["周予安把它剪成了恐怖音频","传播版E07缺失原始应急求救语境","两份录音完全相同"],correct:1,required:["E07","E08"],hint:"先在B03取得原始备份，再把传播版与原始语境对齐。"},
 Q3:{title:"Q3｜现有证据支持的三人行动顺序是什么？",answers:["宋栀启动求救，周予安清理文件，许知遥请求保密","周予安制造录音，宋栀传播，许知遥否认","许知遥先公开录音，另外两人随后删除"],correct:0,required:["E09","E10","E12"],hint:"分别核对纸质值班日志、清理登记和获授权聊天记录。"}
};
const endings={
 A:{title:"结局A｜留下名字",html:`<p>2026年10月。校友网的整理帖更新：</p><p>已核对11月16日局部停电、许知遥被困、宋栀通过备用线路求救和20:52获救的事实。传播片段缺乏完整救援语境，不能作为“宋栀故意制造恐慌”的依据。周予安事后清理公共工作站音频与部分索引，但没有证据认定他是最早剪辑或传播者。报告仅使用获授权资料。</p><p>顾航留言：“原来我当时只录到了后面那十几秒。”</p><p>宋栀回复：“是，那天有人被困了。”</p><p>许知遥回复：“是我。”</p><blockquote>那天晚上，她叫出了一个名字。三年以后，终于有人回答了。</blockquote>`},
 B:{title:"结局B｜关闭广播",html:`<p>匿名档案站出现归档回执：</p><p>当晚事件与传播录音的差异已按来源核验，完整资料转交当事人及获授权渠道留存；公共页面只保留不涉及私人音频的事实摘要。</p><p>许知遥留言：“我以前以为只有所有人知道，事情才算结束。现在我想，至少我们几个应该先知道。”</p><blockquote>不是所有声音都需要再次播给所有人听。但那天晚上，确实有人听见了她。</blockquote>`}
};
const fresh=()=>({started:false,evidence:[],visited:[],passed:[],ending:null});
let state=fresh();
try{state={...fresh(),...JSON.parse(localStorage.getItem(KEY)||"{}")};}catch{}
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const href=id=>`${ENTRY}?page=${id}`;
const allPassed=()=>Object.keys(questions).every(q=>state.passed.includes(q));
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function record(id){if(!state.visited.includes(id))state.visited.push(id);save()}
function audioMarkup(id,src,label){const aid=`audio-${id}-${Math.random().toString(36).slice(2,7)}`;return `<div class="audio-box"><audio id="${aid}" controls preload="metadata" src="${src}">${label}</audio><button class="secondary" data-play="${aid}">播放 / 暂停</button></div>`}
function evidenceCard(id){const e=evidence[id],has=state.evidence.includes(id);let media="";if(e.kind==="image")media=`<button class="thumb" data-image="${url(e.file)}" data-caption="${esc(e.title)}"><img src="${url(e.file)}" alt="${esc(e.title)}" loading="lazy"></button>`;if(e.kind==="audio")media=audioMarkup(id,url(e.file),e.title);return `<article class="e-card" id="${id}"><div class="e-head"><span>${id}</span><small>${esc(e.source)}</small></div><h3>${esc(e.title)}</h3>${media}<p>${esc(e.desc)}</p><button data-collect="${id}" ${has?"disabled":""}>${has?"已收藏":"收藏证据"}</button></article>`}
function gallery(keys=[]){return keys.length?`<section><h2>现场与档案图片</h2><div class="gallery">${keys.map(k=>`<button class="thumb" data-image="${url(k)}" data-caption="资料图片"><img src="${url(k)}" alt="资料图片" loading="lazy"></button>`).join("")}</div></section>`:""}
function compareBlock(){const unlocked=state.evidence.includes("E01")&&state.evidence.includes("E07");return `<section class="compare"><h2>音频来源对比</h2><div class="compare-grid">${evidenceCard("E01")}${evidenceCard("E07")}</div>${unlocked?`<div class="unlock"><p><strong>定位成功：</strong>两个独立来源的重合片段指向广播站原始备份。</p>${evidenceCard("E08")}</div>`:`<div class="locked"><strong>E08尚未定位</strong><p>先从校友网/来源页取得E01，再从论坛音频帖取得E07。相同的E01不会重复计数。</p></div>`}</section>`}
function quizBlock(){return `<section class="quiz"><h2>三项核验</h2>${Object.entries(questions).map(([qid,q])=>{const passed=state.passed.includes(qid);return `<form class="q-card ${passed?"passed":""}" data-quiz="${qid}"><fieldset ${passed?"disabled":""}><legend>${q.title}</legend>${q.answers.map((a,i)=>`<label><input type="radio" name="answer" value="${i}"> ${a}</label>`).join("")}<div class="checks">${q.required.map(id=>`<label><input type="checkbox" name="proof" value="${id}"> ${id} ${evidence[id].title}</label>`).join("")}</div><button>${passed?"核验通过":"提交核验"}</button><p class="feedback" aria-live="polite">${passed?"已通过，结果已保存。":""}</p></fieldset></form>`}).join("")}</section>${allPassed()?finaleBlock():`<aside class="objective">通过三项核验后，E14和结局选择将开放。</aside>`}`}
function finaleBlock(){return `<section class="finale"><h2>E14｜站点所有者最终说明</h2><p>许知遥确认：“我就是广播叫到的那个人。”她建立这个档案站，是为了让当晚事件与后来流传的片段重新按来源被核验。</p>${evidenceCard("E14")}<h2>选择归档方式</h2><div class="ending-actions"><button data-ending="A">留下名字</button><button data-ending="B">关闭广播</button></div>${state.ending?endingBlock(state.ending):""}</section>`}
function endingBlock(id){const e=endings[id];return `<article class="ending"><h2>${e.title}</h2>${e.html}<div class="ending-actions"><button data-ending="A" ${id==="A"?"disabled":""}>查看“留下名字”</button><button data-ending="B" ${id==="B"?"disabled":""}>查看“关闭广播”</button></div></article>`}
function home(){return `<section class="hero"><p class="eyebrow">PROJECT RABBIT HOLE · 晚自习之后</p><h1>先确认：那晚是谁被叫到，为什么她不在值班表上？</h1><p>2023年11月16日，临江三中北楼停电。一段录音里出现了已经不在值班名单上的许知遥。请从来源、时间与独立记录入手，避免把论坛推测当成事实。</p><ol><li>搜索人物、日期、地点或证据编号。</li><li>打开不同来源并收藏证据；图片可点开，音频可播放。</li><li>在“证据”中对照线索，最后进入核验台完成Q1/Q2/Q3。</li></ol><button id="start">开始调查</button></section><section class="objective"><strong>当前目标</strong><p>先找到E03与E06，解释许知遥的身份；再追踪传播版录音与原始备份。</p></section>`}
function render(){const id=new URLSearchParams(location.search).get("page");const n=nodes[id];if(!state.started&&!id){$("#app").innerHTML=home();bind();return}if(!n){history.replaceState({},"",href("A01"));return render()}record(id);$("#app").innerHTML=`<article class="page"><p class="eyebrow">${esc(n.section)} · ${id}</p><h1>${esc(n.title)}</h1><p class="lead">${esc(n.lead)}</p><p>${esc(n.body)}</p>${(n.ev||[]).map(evidenceCard).join("")}${gallery(n.gallery)}${n.special==="compare"?compareBlock():""}${n.special==="quiz"?quizBlock():""}<nav class="related"><h2>继续调查</h2>${n.links.map(x=>`<a href="${href(x)}" data-page="${x}">${x} · ${esc(nodes[x].title)}</a>`).join("")}</nav></article>`;bind();$("#app").focus();}
function go(id){history.pushState({},"",href(id));render()}
function collect(id){if(!state.evidence.includes(id)){state.evidence.push(id);save();toast(`${id} 已加入证据夹`);render()}updateCount()}
function updateCount(){$("#evidenceCount").textContent=state.evidence.length}
function bind(){updateCount();document.querySelectorAll("[data-page]").forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.page)});document.querySelectorAll("[data-collect]").forEach(b=>b.onclick=()=>collect(b.dataset.collect));document.querySelectorAll("[data-image]").forEach(b=>b.onclick=()=>{const d=$("#lightbox");$("#lightboxImg").src=b.dataset.image;$("#lightboxCaption").textContent=b.dataset.caption;d.showModal()});document.querySelectorAll("[data-play]").forEach(b=>b.onclick=async()=>{const a=document.getElementById(b.dataset.play);try{if(a.paused)await a.play();else a.pause()}catch{toast("浏览器阻止了播放，请直接点音频控件重试")}});document.querySelectorAll("[data-ending]").forEach(b=>b.onclick=()=>{state.ending=b.dataset.ending;save();render();document.querySelector(".ending")?.scrollIntoView({behavior:"smooth"})});document.querySelectorAll("[data-quiz]").forEach(f=>f.onsubmit=e=>{e.preventDefault();const qid=f.dataset.quiz,q=questions[qid],answer=Number(new FormData(f).get("answer")),proof=[...f.querySelectorAll('input[name="proof"]:checked')].map(x=>x.value),owned=q.required.every(x=>state.evidence.includes(x)),selected=q.required.every(x=>proof.includes(x));const fb=f.querySelector(".feedback");if(answer===q.correct&&owned&&selected){state.passed.push(qid);save();toast(`${qid} 核验通过`);render()}else{fb.textContent=!owned?`证据尚未齐全。${q.hint}`:!selected?`请勾选支持结论的关键证据。${q.hint}`:`结论与现有证据不符。${q.hint}`}});const start=$("#start");if(start)start.onclick=()=>{state.started=true;save();go("A01")}}
function openDrawer(title,html){$("#drawerTitle").textContent=title;$("#drawerBody").innerHTML=html;$("#drawer").setAttribute("aria-hidden","false");$("#scrim").hidden=false;bind()}
function closeDrawer(){$("#drawer").setAttribute("aria-hidden","true");$("#scrim").hidden=true}
$("#search").onsubmit=e=>{e.preventDefault();const q=new FormData(e.currentTarget).get("q").trim().toLowerCase();const aliases={"许知遥":["F02","C02","C03"],"宋栀":["B01","C02"],"周予安":["B02","C02"],"音频":["F03","B03","C01"],"录音":["A01","F03","B03"],"停电":["A02","A03"],"北楼":["A02","A03","C02"],"值班":["F02","B01"],"11月16日":["A02","F02","C02"],"这个图片是错的吗":["F03","B03"]};let ids=[];Object.entries(aliases).forEach(([k,v])=>{if(k.includes(q)||q.includes(k))ids.push(...v)});Object.entries(nodes).forEach(([id,n])=>{if(id.toLowerCase()===q||`${n.title}${n.body}`.toLowerCase().includes(q))ids.push(id)});ids=[...new Set(ids)];openDrawer(`搜索：${q||"空"}`,ids.length?`<div class="results">${ids.map(id=>`<a href="${href(id)}" data-page="${id}"><strong>${id} · ${esc(nodes[id].title)}</strong><span>${esc(nodes[id].lead)}</span></a>`).join("")}</div>`:`<p>没有直接结果。可尝试：许知遥、11月16日、音频、北楼、值班。</p>`)};
$("#evidence").onclick=()=>openDrawer("证据夹",state.evidence.length?`<p>已收藏 ${state.evidence.length} 项。证据相互印证后再下结论。</p><div class="results">${state.evidence.map(id=>`<a href="#${id}"><strong>${id} · ${esc(evidence[id].title)}</strong><span>${esc(evidence[id].desc)}</span></a>`).join("")}</div><a class="button-link" href="${href("C03")}" data-page="C03">前往核验台</a>`:"<p>还没有收藏证据。先从搜索结果和页面附件开始。</p>");
$("#history").onclick=()=>openDrawer("浏览历史",state.visited.length?`<div class="results">${state.visited.slice().reverse().map(id=>`<a href="${href(id)}" data-page="${id}"><strong>${id} · ${esc(nodes[id].title)}</strong></a>`).join("")}</div>`:"<p>尚无浏览记录。</p>");
$("#drawerClose").onclick=closeDrawer;$("#scrim").onclick=closeDrawer;$("#lightboxClose").onclick=()=>$("#lightbox").close();$("#back").onclick=()=>history.back();$("#forward").onclick=()=>history.forward();document.querySelectorAll("[data-home]").forEach(a=>a.onclick=e=>{e.preventDefault();history.pushState({},"",ENTRY);render()});window.onpopstate=render;window.RABBIT05B={nodes,evidence,questions,endings,fresh};render();
})();
