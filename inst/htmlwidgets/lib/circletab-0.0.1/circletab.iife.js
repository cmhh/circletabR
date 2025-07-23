var circletab=function(c,e){"use strict";const m=["innerHTML"],p={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(v){const o=v,i=e.ref(null),h=t=>{const r=Math.sqrt(d.value/Math.PI),l=t/d.value,a=Math.sqrt(l/Math.PI)/r*50-o.strokeWidth;return console.log(`v: ${t}, mx.value: ${d.value}, r: ${a}`),`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${a}"
      stroke="${o.strokeColor}"
      stroke-width="${o.strokeWidth}"
      fill="${o.fillColor}"
    />
  </svg>
  `};e.computed(()=>{const t=o.data.map(r=>Math.min(...Object.values(r.values)));return Math.min(...t)});const d=e.computed(()=>{if(o.maxVal)return o.maxVal;const t=o.data.map(r=>Math.max(...Object.values(r.values)));return Math.max(...t)});e.computed(()=>o.data.map(t=>t.outcome));const u=e.computed(()=>Object.keys(o.data[0].values)),f=e.computed(()=>"<th></th>"+u.value.map(t=>`<th>${t}</th>`).join("")),b=e.computed(()=>o.data.map(t=>{const r=`<td>${t.outcome}</td>`,l=u.value.map(s=>{const a=t.values[s];return`
        <td class=data>
          <div class=circ>${h(a)}</div>
          <div class="value hidden"><p>${a}</p></div>
          <div class="tooltip hidden"><p>${a}</p></div>
        </td>
      `}).join("");return`<tr>${r}${l}</tr>`}).join("")),y=e.computed(()=>`
  <thead>
    ${f.value}
  </thead>
  <tbody>
    ${b.value}
  </tbody>
  `);return e.onMounted(()=>{const r=i.value.querySelectorAll("td.data");for(var l=0;l<r.length;l++){const s=r[l].querySelector("div.circ > svg > circle"),a=r[l].querySelector("div.tooltip");s.addEventListener("mouseenter",n=>{n.preventDefault(),a.classList.remove("hidden")}),s.addEventListener("mouseleave",n=>{n.preventDefault(),a.classList.add("hidden")}),s.addEventListener("mousemove",n=>{n.preventDefault(),a.style.left=n.pageX+5-window.scrollX-1+"px",a.style.top=n.pageY-a.offsetHeight-window.scrollY+1+"px"})}}),(t,r)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("table",{ref_key:"tabContainer",ref:i,innerHTML:y.value,class:"circle-tab"},null,8,m)]))}};return c.CircleTab=p,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),c}({},Vue);
