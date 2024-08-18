import{i as c,S as u}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m=t=>`
  <li class="gallery-card">
  <div class="container-el">
  <div class="container-img">
    <a href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /></a>
  </div>  <div class="container-text">
      <p class="text-name">Likes <span class="span-numbers">${t.likes}</span></p>
      <p class="text-name">Views <span class="span-numbers">${t.views}</span></p>
      <p class="text-name">Comments <span class="span-numbers">${t.comments}</span></p>
      <p class="text-name">Downloads <span class="span-numbers">${t.downloads}</span></p>
    </div>
  </div>
</li>
  `,p="https://pixabay.com",d=t=>{const r=new URLSearchParams({key:"45423395-a55c580a59309a3b931c40bb9",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/api/?${r}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},i=document.querySelector(".js-form"),l=document.querySelector(".list-photo");function f(t){t.preventDefault();const r=i.elements.img.value.trim();if(r===""){c.error({message:"Please enter a search term."});return}i.reset();const a=document.querySelector(".js-loader");a.classList.remove("is-hidden"),d(r).then(n=>{if(n.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",i.reset();return}const e=n.hits.map(o=>m(o)).join("");l.innerHTML=e,new u(".container-img a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}).catch(n=>{console.log(n)}).finally(()=>{a.classList.add("is-hidden")})}i.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
