var circletab=function(c,e){"use strict";const u=["innerHTML"],m={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(p){const r=p,d=e.ref(null),v=t=>`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="50" 
      cy="50" 
      r="${t/2/f.value*100}" 
      stroke="${r.strokeColor}" 
      stroke-width="${r.strokeWidth}" 
      fill="${r.fillColor}" 
    />
  </svg>
  `;e.computed(()=>{const t=r.data.map(o=>Math.min(...Object.values(o.values)));return Math.min(...t)});const f=e.computed(()=>{if(r.maxVal)return r.maxVal;const t=r.data.map(o=>Math.max(...Object.values(o.values)));return Math.min(...t)});e.computed(()=>r.data.map(t=>t.outcome));const i=e.computed(()=>Object.keys(r.data[0].values)),b=e.computed(()=>"<th></th>"+i.value.map(t=>`<th>${t}</th>`).join("")),h=e.computed(()=>r.data.map(t=>{const o=`<td>${t.outcome}</td>`,s=i.value.map(n=>{const a=t.values[n];return`<td class=data><div class=circ>${v(a)}</div><div class=value><p>${a}</p></div><div class="tooltip hidden">${a}</div></td>`}).join("");return`<tr>${o}${s}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${b.value}
  </thead>
  <tbody>
    ${h.value}
  </tbody>
  `);return e.onMounted(()=>{const o=d.value.querySelectorAll("td.data");for(var s=0;s<o.length;s++){const n=o[s].querySelector("div.circ > svg > circle"),a=o[s].querySelector("div.tooltip");n.addEventListener("mouseover",l=>{a.classList.remove("hidden")}),n.addEventListener("mouseout",l=>{a.classList.add("hidden")}),n.addEventListener("mousemove",l=>{l.preventDefault(),a.style.left=l.offsetX-5+"px",a.style.top=l.offsetY-a.offsetHeight-5+"px"})}}),(t,o)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:d,innerHTML:y.value,class:"circle-tab"},null,8,u)]))}};return c.CircleTab=m,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),c}({},Vue);
