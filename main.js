// --- NAV ---
const navItems = ["Home", "About Me", "Services", "Contact"];
const nav = document.createElement("nav");
nav.style.cssText = "background:#333; color:#fff; padding:12px; display:flex; justify-content:center; gap:20px; font-size:18px; font-family:sans-serif;";
navItems.forEach(item=>{
  const a=document.createElement("a");
  a.textContent=item;
  a.href="#";
  a.style.cssText="color:#fff; text-decoration:none; cursor:pointer;";
  a.onclick=()=>loadPage(item);
  nav.appendChild(a);
});
document.body.appendChild(nav);

// --- HEADER ---
const header = document.createElement("header");
header.textContent="Welcome My JS";
header.style.cssText="background:#444; color:#fff; padding:15px; text-align:center; font-size:22px;";
document.body.appendChild(header);

// --- MAIN ---
const main = document.createElement("main");
main.style.cssText="padding:20px; font-family:sans-serif; max-width:900px; margin:20px auto; background:#f0f0f0; border-radius:8px;";
document.body.appendChild(main);

// --- FOOTER ---
const footer = document.createElement("footer");
footer.innerHTML="<p style='color:#fff;'>© 2025 My JS Site</p>";
footer.style.cssText="background:blue; color:#fff; text-align:center; padding:10px; border-radius:0 0 8px 8px;";
document.body.appendChild(footer);

// --- CH7,8,9 FUNCTIONS ---
function changeContentStyle(){ const el=document.getElementById("content"); if(el){ el.style.background="#444"; el.style.color="#fff"; } }
function changeClassStyle(){ const els=document.getElementsByClassName("demo-class"); for(let el of els){ el.style.color="#444"; el.style.fontWeight="bold"; } }
function changeTagStyle(){ const spans=document.getElementsByTagName("span"); for(let s of spans){ s.style.color="#444"; } }
function changeFirstBox(){ const box=document.querySelector(".box"); if(box){ box.style.border="2px solid #444"; } }
function changeAllItems(){ document.querySelectorAll(".item").forEach(i=>i.style.background="#ccc"); }
function modifyContent(){ const t=document.getElementById("changeText"); const l=document.getElementById("changeLink"); if(t)t.textContent="Text Changed!"; if(l){l.href="https://github.com"; l.textContent="GitHub"; l.style.color="#444";} }
function createElement(){ const c=document.getElementById("container"); if(c){ const p=document.createElement("p"); p.textContent="New paragraph!"; p.style.color="#444"; c.appendChild(p);} }
function removeElement(){ const c=document.getElementById("container"); if(c && c.lastChild)c.removeChild(c.lastChild); }
function addNewItem(){ const l=document.getElementById("itemList"); if(l){ const li=document.createElement("li"); li.textContent="Item "+(l.children.length+1); li.style.color="#444"; l.appendChild(li);} }

// --- LOAD PAGE ---
function loadPage(page){
  main.innerHTML="";
  // --- HOME PAGE ---
  if(page==="Home"){
    const ol=document.createElement("ol");
    ["Somalia","Kenya","Eritrea","Djibouti"].forEach(c=>{
      const li=document.createElement("li");
      li.textContent=c;
      li.style.color="#444";
      ol.appendChild(li);
    });
    main.appendChild(ol);

    let selLi = null;
    ol.addEventListener("click", e => {
      if(e.target.tagName==="LI"){
        if(selLi) selLi.style.background="";
        selLi = e.target;
        selLi.style.background="#ccc";
      }
    });

    const btnBox=document.createElement("div");
    btnBox.style.marginTop="15px";
    main.appendChild(btnBox);

    const insertBtn=document.createElement("button");
    insertBtn.textContent="Insert Country";
    insertBtn.onclick = ()=>{ const li = document.createElement("li"); li.textContent="Germany"; li.style.color="#444"; ol.appendChild(li); };
    btnBox.appendChild(insertBtn);

    const replaceBtn=document.createElement("button");
    replaceBtn.textContent="Replace Country";
    replaceBtn.onclick = ()=>{ if(selLi) selLi.textContent="Replaced Country"; else if(ol.lastElementChild) ol.lastElementChild.textContent="Replaced Country"; };
    btnBox.appendChild(replaceBtn);

    const removeBtn=document.createElement("button");
    removeBtn.textContent="Remove Country";
    removeBtn.onclick = ()=>{ if(selLi){ ol.removeChild(selLi); selLi=null; } else if(ol.lastElementChild){ ol.removeChild(ol.lastElementChild); } };
    btnBox.appendChild(removeBtn);
  }

  // --- ABOUT ME ---
  else if(page==="About Me"){
    main.innerHTML=`
      <h2>About Me</h2>
      <div style="display:flex; gap:20px; align-items:flex-start;">
        <img src="naimo.jpeg" alt="naimo.jpeg" style="width:120px; height:120px; object-fit:cover; border-radius:10px; border:2px solid #444;">
        <div>
          <p><strong>Name:</strong>Naimo muhidin Ali</p>
          <p><strong>ID:</strong> CS1500978</p>
          <p><strong>Phone:</strong> 0614243483</p>
          <p><strong>Email:</strong> naimomudin@gmail.com</p>
          <p><strong>University:</strong> JAZIIRA UNI</p>
          <p><strong>Class:</strong> BATCH15B</p>
          <p><strong>Skills:</strong> Computer, Makeup, typing</p>
           <div class="links">
        <a href="https://www.thecleanclothes.com/"> clean Clothes </a>
        </div>
      </div>
    `;
  }

  // --- SERVICES ---
  else if(page==="Services"){
    main.innerHTML=`<h2>Services</h2>
      <div id="btnDiv" style="display:flex; flex-wrap:wrap; gap:6px;"></div>
      <div id="output" style="margin-top:10px; padding:10px; border:1px solid #444;"></div>
      <p id="content">getElementById Example</p>
      <p class="demo-class">Class Example</p>
      <span>Span Example</span>
      <div class="box">Box Example</div>
      <div class="item">Item Example</div>
      <p id="changeText">Text</p><a id="changeLink" href="https://google.com">Google</a>
      <div id="container"></div>
      <ul id="itemList"><li>Item1</li></ul>`;
    setup10Buttons();
  }

  // --- CONTACT ---
  else if(page==="Contact"){
    main.innerHTML=`<h2>Contact Us</h2>
    <form id="contactForm" style="border:1px solid #444; padding:10px;">
      <label>Name: <input type="text" id="cName" required></label><br><br>
      <label>Email: <input type="email" id="cEmail" required></label><br><br>
      <button type="submit">Submit</button>
    </form>
    <p>Status: <span id="contactStatus"></span></p>`;
    document.getElementById("contactForm").addEventListener("submit",e=>{
      e.preventDefault();
      const name=document.getElementById("cName").value;
      const email=document.getElementById("cEmail").value;
      document.getElementById("contactStatus").textContent=`Submitted! Name: ${name}, Email: ${email}`;
    });
  }
}

// --- SERVICES:  ---
function setup10Buttons(){
  const btnDiv=document.getElementById("btnDiv");
  const out=document.getElementById("output");
  function show(txt){ out.textContent=txt; }
  const obj={name:"NAIMA", age:18};
  const buttons=[
    {label:"1-Show Object", run:()=>show(`Name:${obj.name}, Age:${obj.age}`)},
    {label:"2-Add Prop", run:()=>{ obj.country="somali"; show(`Country:${obj.country}`); }},
    {label:"3-Modify Age", run:()=>{ obj.age=20; show(`New Age:${obj.age}`); }},
    {label:"4-Method Say", run:()=>{ obj.say=()=>`Hello ${obj.name}`; show(obj.say()); }},
    {label:"5-ChangeContent", run:()=>changeContentStyle()},
    {label:"6-ChangeClass", run:()=>changeClassStyle()},
    {label:"7-ChangeTag", run:()=>changeTagStyle()},
    {label:"8-CreateElem", run:()=>createElement()},
    {label:"9-RemoveElem", run:()=>removeElement()},
    {label:"10-AddItem", run:()=>addNewItem()}
  ];
  buttons.forEach(b=>{
    const btn=document.createElement("button");
    btn.textContent=b.label;
    btn.style.cssText="padding:6px; border:1px solid #444; background:#eee; cursor:pointer; margin:3px;";
    btn.onclick=b.run;
    btnDiv.appendChild(btn);
  });
}

// --- LOAD HOME DEFAULT ---
loadPage("Home");