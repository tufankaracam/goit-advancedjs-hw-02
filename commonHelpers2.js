import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i}from"./assets/vendor-77e16229.js";const S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]"),r=document.querySelector("[data-start]");let a=null,u=null;r.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=new Date(e[0]),t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes());if(o<=n){i.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),r.disabled=!0;return}a&&clearInterval(a),u=o,r.disabled=!1}};function D(e){const s=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:l,seconds:m}}const M=()=>{const o=u-new Date;if(o<=0){i.success({title:"Success",message:"Time is up!",position:"topRight"}),clearInterval(a);return}const{days:t,hours:n,minutes:c,seconds:s}=D(o);S.textContent=t.toString().padStart(2,"0"),p.textContent=n.toString().padStart(2,"0"),f.textContent=c.toString().padStart(2,"0"),g.textContent=s.toString().padStart(2,"0")};r.addEventListener("click",()=>{a=setInterval(M,1e3)});h("#datetime-picker",y);
//# sourceMappingURL=commonHelpers2.js.map
