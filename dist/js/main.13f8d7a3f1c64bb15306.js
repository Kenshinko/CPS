(self.webpackChunk=self.webpackChunk||[]).push([[179],{5668:function(e,t,s){"use strict";var i=s(1370),n=s.n(i),a=new URL(s(9859),s.b),c=new URL(s(6958),s.b),l=new URL(s(8752),s.b),r=new URL(s(708),s.b),o=new URL(s(2092),s.b),d=new URL(s(783),s.b),p=new URL(s(7373),s.b),m=new URL(s(7235),s.b),u=new URL(s(9351),s.b),_=new URL(s(7091),s.b),b=new URL(s(7121),s.b),f=new URL(s(7344),s.b),w=new URL(s(7293),s.b),v=new URL(s(2138),s.b),L=new URL(s(6430),s.b),g=new URL(s(5094),s.b),x=(n()(a),n()(c),n()(l),n()(r),n()(o),n()(d),n()(p),n()(m),n()(u),n()(_),n()(b),n()(f),n()(w),n()(v),n()(L),n()(g),s(8443));const y=document.querySelector(".brands__list");let h,C,E;const k=()=>{document.documentElement.clientWidth<=767&&"false"===y.dataset.mobile&&(h=new x.ZP(".brands__list",{slidesPerView:"auto",spaceBetween:16,autoplay:{delay:3e3},speed:1e3,pagination:{el:".brands__list-pagination",type:"bullets",clickable:!0},modules:[x.W_,x.tl,x.pt],wrapperClass:"brands__wrap",slideClass:"brands__list-item",slideActiveClass:"brands__list-item-active",slideNextClass:"brands__list-item-next",slidePrevClass:"brands__list-item-prev",slideVisibleClass:"brands__list-item-visible"}),C=new x.ZP(".maintenance__list",{slidesPerView:"auto",spaceBetween:16,autoplay:{delay:3500},speed:1500,pagination:{el:".maintenance__list-pagination",type:"bullets",clickable:!0},modules:[x.W_,x.tl,x.pt],wrapperClass:"maintenance__wrap",slideClass:"maintenance__list-item",slideActiveClass:"maintenance__list-item-active",slideNextClass:"maintenance__list-item-next",slidePrevClass:"maintenance__list-item-prev",slideVisibleClass:"maintenance__list-item-visible"}),E=new x.ZP(".prices__list",{slidesPerView:"auto",spaceBetween:16,autoplay:{delay:5e3},speed:2e3,pagination:{el:".prices__list-pagination",type:"bullets",clickable:!0},modules:[x.W_,x.tl,x.pt],wrapperClass:"prices__wrap",slideClass:"prices__list-item",slideActiveClass:"prices__list-item-active",slideNextClass:"prices__list-item-next",slidePrevClass:"prices__list-item-prev",slideVisibleClass:"prices__list-item-visible"}),y.dataset.mobile="true"),document.documentElement.clientWidth>767&&(y.dataset.mobile="false",y.classList.contains("swiper-initialized")&&(h.destroy(),C.destroy(),E.destroy()))};k(),window.addEventListener("resize",(()=>{k()}));s(651)},651:function(){const e=document.querySelector(".sidebar"),t=document.querySelector(".icon-list"),s=Array.from(document.querySelectorAll(".icon-close")),i=Array.from(document.querySelectorAll(".bg-field")),n=[s.shift(),i.shift()],a=Array.from(document.querySelectorAll(".show-all")),c=a.shift(),l=document.querySelectorAll(".directory-wrap"),r=document.querySelector(".about-company-article__excerpt"),o=document.querySelectorAll(".about-company-article__text"),d=document.querySelectorAll(".icon-call"),p=document.querySelector(".page__modal-phone"),m=document.querySelectorAll(".icon-chat"),u=document.querySelector(".page__modal-email"),_=[p,u];t.addEventListener("click",(()=>{e.classList.add("sidebar_active")})),n.forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("sidebar_active")}))})),a.forEach(((e,t)=>{e.addEventListener("click",(()=>{"Скрыть"===a[t].textContent?(l[t].removeAttribute("style"),a[t].textContent="Показать всe",a[t].classList.remove("show-all_expanded")):(l[t].style.maxHeight=l[t].scrollHeight+"px",a[t].textContent="Скрыть",a[t].classList.add("show-all_expanded"))}))})),c.addEventListener("click",(()=>{o.forEach((e=>{"Скрыть"===c.textContent?(r.removeAttribute("style"),e.classList.remove("about-company-article__text_expanded")):(r.style.maxHeight=r.scrollHeight+40+"px",e.classList.add("about-company-article__text_expanded"))})),"Скрыть"===c.textContent?(c.textContent="Показать всe",c.classList.remove("show-all_expanded")):(c.textContent="Скрыть",c.classList.add("show-all_expanded"))})),d.forEach((t=>{t.addEventListener("click",(()=>{e.classList?.remove("sidebar_active"),p.classList.add("modal_showed")}))})),m.forEach((t=>{t.addEventListener("click",(()=>{e.classList?.remove("sidebar_active"),u.classList.add("modal_showed")}))})),s.forEach(((t,s)=>{t.addEventListener("click",(()=>{e.classList?.remove("sidebar_active"),_[s].classList.remove("modal_showed")}))})),i.forEach(((t,s)=>{t.addEventListener("click",(()=>{e.classList?.remove("sidebar_active"),_[s].classList.remove("modal_showed")}))})),window.addEventListener("keydown",(function(t){27===t.keyCode&&(e.classList?.remove("sidebar_active"),p.classList?.remove("modal_showed"),u.classList?.remove("modal_showed"))}))},7235:function(e,t,s){"use strict";e.exports=s.p+"img/5fb79dd12e637d7a00e0.png"},708:function(e,t,s){"use strict";e.exports=s.p+"img/5270dcf57ec8505c9437.png"},7091:function(e,t,s){"use strict";e.exports=s.p+"img/fa17032b67cde6500213.png"},783:function(e,t,s){"use strict";e.exports=s.p+"img/08281b1fc0ca8c439553.png"},7121:function(e,t,s){"use strict";e.exports=s.p+"img/23b94fa11e77fc1cd090.png"},7344:function(e,t,s){"use strict";e.exports=s.p+"img/c1b907001cf14e9cd677.png"},7373:function(e,t,s){"use strict";e.exports=s.p+"img/2832a3df08ed2720eb9c.png"},6958:function(e,t,s){"use strict";e.exports=s.p+"img/e8c36525616bebe1d6b7.png"},7293:function(e,t,s){"use strict";e.exports=s.p+"img/563fdbbd5d3274b9968a.png"},2138:function(e,t,s){"use strict";e.exports=s.p+"img/04c33ac6f0b27814a110.png"},6430:function(e,t,s){"use strict";e.exports=s.p+"img/bc1dc11f647b9e4c3c27.png"},5094:function(e,t,s){"use strict";e.exports=s.p+"img/dfce6277389e1bca05df.png"},8752:function(e,t,s){"use strict";e.exports=s.p+"img/e89ef4247639a893c990.png"},9351:function(e,t,s){"use strict";e.exports=s.p+"img/eb9729d7de8e143c38c5.png"},2092:function(e,t,s){"use strict";e.exports=s.p+"img/08ddf17a22e78ac09427.png"},9859:function(e,t,s){"use strict";e.exports=s.p+"img/6385c5505adfdfab3885.png"}},function(e){e.O(0,[1],(function(){return t=5668,e(e.s=t);var t}));e.O()}]);