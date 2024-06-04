import{p as u}from"./products-DHjfV0qm.js";import{g as n,u as m}from"./getDtataFromLS-Du1oZu-l.js";typeof process<"u"&&process.platform;const p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=new Uint8Array(64),g=new Uint8Array(128);for(let a=0;a<p.length;a++){const s=p.charCodeAt(a);f[a]=s,g[s]=a}n();const _=(a,s,c,i)=>{let e=document.querySelector(`#card${a}`).querySelector(".sale_price").innerText;e=parseInt(e.replace("₹","")),c=parseInt(c);let r=n();if(r.find(t=>t.id===a))return!1;let o={id:a,price:e,stock:c};r.push(o),localStorage.setItem("data",JSON.stringify(r)),m(r)};let h=document.querySelector(".product_templets_main"),v=a=>{a.forEach(s=>{let{name:c,id:i,category:l,price:e,stock:r,description:d,image:o}=s,t=document.createElement("div");t.classList.add("products_templetes"),t.setAttribute("id",`card${i}`),t.setAttribute("data-aos","zoom-in-up"),t.innerHTML=`
        <button class="catagory">${l}</button>
        <div class="product_image_templetes">
          <img src=${o} alt="our product templeate images">
        </div>
        <p class="product_name">${c}</p>
        <div class="product_rating_main">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      <p class="product_article">
        ${d}
      </p>
      <div class="products_price_main">
        <p class="sale_price">₹${e}</p>
        <p class="orginal_price">₹${e*1.2}</p>
      </div>
      <p class="stock_available">Total stock available ${r}</p>
      <button class="product_btn">
        <i class="fa-solid fa-cart-shopping"></i>
        <p class="addtocart">Add To Cart</p>
      </button>
        
        `,h.appendChild(t),t.querySelector(".addtocart").addEventListener("click",()=>{_(i,e,r)})})};v(u);
