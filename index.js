import{a as p,S as w,i as a}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&y(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function y(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const b="48925713-6281e076b4b07f0ec4ad03690",E="https://pixabay.com/api/",L=40;async function f(r,t){try{return(await p.get(E,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:t}})).data}catch(o){throw console.error("Error fetching images:",o),o}}const u=document.querySelector(".gallery");let P=new w(".gallery a");function g(r){const t=r.map(o=>`
        <a href="${o.largeImageURL}" class="gallery-item">
            <img src="${o.webformatURL}" alt="${o.tags}" title="Likes: ${o.likes}, Views: ${o.views}, Comments: ${o.comments}, Downloads: ${o.downloads}"/>
        </a>
    `).join("");u.insertAdjacentHTML("beforeend",t),P.refresh()}function S(){u.innerHTML=""}function q(){const{height:r}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const m=document.querySelector("#search-form");document.querySelector(".gallery");const l=document.querySelector(".load-more"),c=document.querySelector(".loader");let i="",n=1;const h=40;m.addEventListener("submit",async r=>{if(r.preventDefault(),i=r.target.elements.searchQuery.value.trim(),!i){a.warning({title:"Warning",message:"Please enter a search term!"});return}n=1,S(),l.style.display="none",c.style.display="block";try{const t=await f(i,n);t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(g(t.hits),t.totalHits>h&&(l.style.display="block"))}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}c.style.display="none",m.reset()});l.addEventListener("click",async()=>{n+=1,c.style.display="block";try{const r=await f(i,n);g(r.hits),q();const t=Math.ceil(r.totalHits/h);n>=t&&(l.style.display="none",a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}c.style.display="none"});
//# sourceMappingURL=index.js.map
