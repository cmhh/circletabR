(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.circletab={},l.Vue))})(this,function(l,e){"use strict";const p=["innerHTML"],m={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(v){const a=v,i=e.ref(null),f=t=>{const r=Math.sqrt(d.value/Math.PI),n=t/d.value,o=Math.sqrt(n/Math.PI)/r*50-a.strokeWidth;return console.log(`v: ${t}, mx.value: ${d.value}, r: ${o}`),`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${o}"
      stroke="${a.strokeColor}"
      stroke-width="${a.strokeWidth}"
      fill="${a.fillColor}"
    />
  </svg>
  `};e.computed(()=>{const t=a.data.map(r=>Math.min(...Object.values(r.values)));return Math.min(...t)});const d=e.computed(()=>{if(a.maxVal)return a.maxVal;const t=a.data.map(r=>Math.max(...Object.values(r.values)));return Math.max(...t)});e.computed(()=>a.data.map(t=>t.outcome));const u=e.computed(()=>Object.keys(a.data[0].values)),h=e.computed(()=>"<th></th>"+u.value.map(t=>`<th>${t}</th>`).join("")),b=e.computed(()=>a.data.map(t=>{const r=`<td>${t.outcome}</td>`,n=u.value.map(c=>{const o=t.values[c];return`
        <td class=data>
          <div class=circ>${f(o)}</div>
          <div class="value hidden"><p>${o}</p></div>
          <div class="tooltip hidden"><p>${o}</p></div>
        </td>
      `}).join("");return`<tr>${r}${n}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${h.value}
  </thead>
  <tbody>
    ${b.value}
  </tbody>
  `);return e.onMounted(()=>{const r=i.value.querySelectorAll("td.data");for(var n=0;n<r.length;n++){const c=r[n].querySelector("div.circ > svg > circle"),o=r[n].querySelector("div.tooltip");c.addEventListener("mouseenter",s=>{s.preventDefault(),o.classList.remove("hidden")}),c.addEventListener("mouseleave",s=>{s.preventDefault(),o.classList.add("hidden")}),c.addEventListener("mousemove",s=>{s.preventDefault(),o.style.left=s.pageX+5-window.scrollX-1+"px",o.style.top=s.pageY-o.offsetHeight-window.scrollY+1+"px"})}}),(t,r)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:i,innerHTML:y.value,class:"circle-tab"},null,8,p)]))}};l.CircleTab=m,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
