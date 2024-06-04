let a=e=>{let t=document.querySelector(".shopvalue");t.innerText=e.length},r=()=>{let e=localStorage.getItem("data");return e?(e=JSON.parse(e),a(e),e):[]};export{r as g,a as u};
