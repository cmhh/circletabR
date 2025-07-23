(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.circletab={},s.Vue))})(this,function(s,e){"use strict";const m=["innerHTML"],p={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(f){const o=f,i=e.ref(null),v=t=>(console.log(`v: ${t}, mx.value: ${d.value}, r: ${t/2/d.value*100}`),`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${t/2/d.value*100}"
      stroke="${o.strokeColor}"
      stroke-width="${o.strokeWidth}"
      fill="${o.fillColor}"
    />
  </svg>
  `);e.computed(()=>{const t=o.data.map(r=>Math.min(...Object.values(r.values)));return Math.min(...t)});const d=e.computed(()=>{if(o.maxVal)return o.maxVal;const t=o.data.map(r=>Math.max(...Object.values(r.values)));return Math.max(...t)});e.computed(()=>o.data.map(t=>t.outcome));const u=e.computed(()=>Object.keys(o.data[0].values)),h=e.computed(()=>"<th></th>"+u.value.map(t=>`<th>${t}</th>`).join("")),b=e.computed(()=>o.data.map(t=>{const r=`<td>${t.outcome}</td>`,n=u.value.map(c=>{const a=t.values[c];return`
        <td class=data>
          <div class=circ>${v(a)}</div>
          <div class=value><p>${a}</p></div>
          <div class="tooltip hidden">${a}</div>
        </td>
      `}).join("");return`<tr>${r}${n}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${h.value}
  </thead>
  <tbody>
    ${b.value}
  </tbody>
  `);return e.onMounted(()=>{const r=i.value.querySelectorAll("td.data");for(var n=0;n<r.length;n++){const c=r[n].querySelector("div.circ > svg > circle"),a=r[n].querySelector("div.tooltip");c.addEventListener("mouseover",l=>{a.classList.remove("hidden")}),c.addEventListener("mouseout",l=>{a.classList.add("hidden")}),c.addEventListener("mousemove",l=>{l.preventDefault(),a.style.left=l.offsetX-5+"px",a.style.top=l.offsetY-a.offsetHeight-5+"px"})}}),(t,r)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:i,innerHTML:y.value,class:"circle-tab"},null,8,m)]))}};s.CircleTab=p,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
