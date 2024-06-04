import"./hamburgermenue-1br6FkMV.js";import{p as n}from"./products-DHjfV0qm.js";import{g as l,u as m}from"./getDtataFromLS-Du1oZu-l.js";let p=document.querySelector(".sto"),S=document.querySelector(".ft"),_=50,f=0;function v(){let t=l().reduce((r,o)=>{let c=Number(o.price);return r+c},f);p.innerText=`₹${t}`,S.innerText=`₹${t+_}`}let g=e=>{let t=l();t=t.filter(o=>{if(o.id!==e)return t}),localStorage.setItem("data",JSON.stringify(t));let r=document.querySelector(`#card${e}`);r&&r.remove(),m(t)},$=document.querySelector(".show_products_cont"),y=e=>{e.forEach(t=>{let{name:r,id:o,category:c,image:s,price:i,stock:u}=t,a=document.createElement("div");$.appendChild(a),a.classList.add("s_c_tampleates"),a.setAttribute("data-aos","zoom-in"),a.innerHTML=`
        
                <div class="sc_catagory">${c}</div>
                <img src=${s} alt="our products">
                <p class="sc_name">${r}</p>
                <p class="sc_price">₹${i}</p>
                <p class="sc_stock">Stock(${u})</p>
                <button class="remove_sc">Remove</button>
        
        `;let d=a.querySelector(".remove_sc");a.setAttribute("id",`card${o}`),d.addEventListener("click",()=>{g(o)}),v()})},b=l(),P=n.filter(e=>b.some(t=>t.id===e.id));y(P);
