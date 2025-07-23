(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.circletab={},s.Vue))})(this,function(s,e){"use strict";const p=["innerHTML"],m={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(f){const r=f,i=e.ref(null),v=t=>(console.log(`v: ${t}, mx.value: ${d.value}, r: ${t/2/d.value*100}`),`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${t/2/d.value*100-r.strokeWidth}"
      stroke="${r.strokeColor}"
      stroke-width="${r.strokeWidth}"
      fill="${r.fillColor}"
    />
  </svg>
  `);e.computed(()=>{const t=r.data.map(o=>Math.min(...Object.values(o.values)));return Math.min(...t)});const d=e.computed(()=>{if(r.maxVal)return r.maxVal;const t=r.data.map(o=>Math.max(...Object.values(o.values)));return Math.max(...t)});e.computed(()=>r.data.map(t=>t.outcome));const u=e.computed(()=>Object.keys(r.data[0].values)),h=e.computed(()=>"<th></th>"+u.value.map(t=>`<th>${t}</th>`).join("")),b=e.computed(()=>r.data.map(t=>{const o=`<td>${t.outcome}</td>`,l=u.value.map(c=>{const a=t.values[c];return`
        <td class=data>
          <div class=circ>${v(a)}</div>
          <div class="value hidden"><p>${a}</p></div>
          <div class="tooltip hidden"><p>${a}</p></div>
        </td>
      `}).join("");return`<tr>${o}${l}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${h.value}
  </thead>
  <tbody>
    ${b.value}
  </tbody>
  `);return e.onMounted(()=>{const o=i.value.querySelectorAll("td.data");for(var l=0;l<o.length;l++){const c=o[l].querySelector("div.circ > svg > circle"),a=o[l].querySelector("div.tooltip");c.addEventListener("mouseenter",n=>{n.preventDefault(),a.classList.remove("hidden")}),c.addEventListener("mouseleave",n=>{n.preventDefault(),a.classList.add("hidden")}),c.addEventListener("mousemove",n=>{n.preventDefault(),a.style.left=n.pageX+5-1+"px",a.style.top=n.pageY-a.offsetHeight+1+"px"})}}),(t,o)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:i,innerHTML:y.value,class:"circle-tab"},null,8,p)]))}};s.CircleTab=m,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
