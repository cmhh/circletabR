(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.circletab={},n.Vue))})(this,function(n,e){"use strict";const u=["innerHTML"],m={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(p){const o=p,d=e.ref(null),f=t=>`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="50" 
      cy="50" 
      r="${t/2/v.value*100}" 
      stroke="${o.strokeColor}" 
      stroke-width="${o.strokeWidth}" 
      fill="${o.fillColor}" 
    />
  </svg>
  `;e.computed(()=>{const t=o.data.map(r=>Math.min(...Object.values(r.values)));return Math.min(...t)});const v=e.computed(()=>{if(o.maxVal)return o.maxVal;const t=o.data.map(r=>Math.max(...Object.values(r.values)));return Math.min(...t)});e.computed(()=>o.data.map(t=>t.outcome));const i=e.computed(()=>Object.keys(o.data[0].values)),h=e.computed(()=>"<th></th>"+i.value.map(t=>`<th>${t}</th>`).join("")),b=e.computed(()=>o.data.map(t=>{const r=`<td>${t.outcome}</td>`,s=i.value.map(l=>{const a=t.values[l];return`<td class=data><div class=circ>${f(a)}</div><div class=value><p>${a}</p></div><div class="tooltip hidden">${a}</div></td>`}).join("");return`<tr>${r}${s}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${h.value}
  </thead>
  <tbody>
    ${b.value}
  </tbody>
  `);return e.onMounted(()=>{const r=d.value.querySelectorAll("td.data");for(var s=0;s<r.length;s++){const l=r[s].querySelector("div.circ > svg > circle"),a=r[s].querySelector("div.tooltip");l.addEventListener("mouseover",c=>{a.classList.remove("hidden")}),l.addEventListener("mouseout",c=>{a.classList.add("hidden")}),l.addEventListener("mousemove",c=>{c.preventDefault(),a.style.left=c.offsetX-5+"px",a.style.top=c.offsetY-a.offsetHeight-5+"px"})}}),(t,r)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:d,innerHTML:y.value,class:"circle-tab"},null,8,u)]))}};n.CircleTab=m,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
