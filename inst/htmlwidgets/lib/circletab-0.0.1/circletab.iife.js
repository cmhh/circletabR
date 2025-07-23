var circletab=function(n,e){"use strict";const m=["innerHTML"],p={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(v){const r=v,u=e.ref(null),f=t=>(console.log(`v: ${t}, mx.value: ${d.value}, r: ${t/2/d.value*100}`),`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${t/2/d.value*100}"
      stroke="${r.strokeColor}"
      stroke-width="${r.strokeWidth}"
      fill="${r.fillColor}"
    />
  </svg>
  `);e.computed(()=>{const t=r.data.map(a=>Math.min(...Object.values(a.values)));return Math.min(...t)});const d=e.computed(()=>{if(r.maxVal)return r.maxVal;const t=r.data.map(a=>Math.max(...Object.values(a.values)));return Math.max(...t)});e.computed(()=>r.data.map(t=>t.outcome));const i=e.computed(()=>Object.keys(r.data[0].values)),b=e.computed(()=>"<th></th>"+i.value.map(t=>`<th>${t}</th>`).join("")),h=e.computed(()=>r.data.map(t=>{const a=`<td>${t.outcome}</td>`,l=i.value.map(c=>{const o=t.values[c];return`
        <td class=data>
          <div class=circ>${f(o)}</div>
          <div class=value><p>${o}</p></div>
          <div class="tooltip hidden">${o}</div>
        </td>
      `}).join("");return`<tr>${a}${l}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${b.value}
  </thead>
  <tbody>
    ${h.value}
  </tbody>
  `);return e.onMounted(()=>{const a=u.value.querySelectorAll("td.data");for(var l=0;l<a.length;l++){const c=a[l].querySelector("div.circ > svg > circle"),o=a[l].querySelector("div.tooltip");c.addEventListener("mouseover",s=>{o.classList.remove("hidden")}),c.addEventListener("mouseout",s=>{o.classList.add("hidden")}),c.addEventListener("mousemove",s=>{s.preventDefault(),o.style.left=s.offsetX-5+"px",o.style.top=s.offsetY-o.offsetHeight-5+"px"})}}),(t,a)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:u,innerHTML:y.value,class:"circle-tab"},null,8,m)]))}};return n.CircleTab=p,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),n}({},Vue);
