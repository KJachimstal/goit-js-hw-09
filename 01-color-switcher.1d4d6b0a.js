const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");let d=0;e.addEventListener("click",(()=>{e.disabled=!0,d=setInterval((()=>{a.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1d4d6b0a.js.map
