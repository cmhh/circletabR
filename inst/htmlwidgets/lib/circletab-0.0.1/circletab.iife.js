var circletab=function(c,t){"use strict";const m=["innerHTML"],p={__name:"CircleTab",props:{data:{type:Object,required:!0},maxVal:{type:Number,required:!1},fillColor:{type:String,required:!1,default:"rgba(59, 130, 246, .5)"},strokeWidth:{type:Number,required:!1,default:2},strokeColor:{type:String,required:!1,default:"#666"}},setup(v){const r=v,i=t.ref(null),f=e=>(console.log(`v: ${e}, mx.value: ${d.value}, r: ${e/2/d.value*100}`),`
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${e/2/d.value*100-r.strokeWidth}"
      stroke="${r.strokeColor}"
      stroke-width="${r.strokeWidth}"
      fill="${r.fillColor}"
    />
  </svg>
  `);t.computed(()=>{const e=r.data.map(a=>Math.min(...Object.values(a.values)));return Math.min(...e)});const d=t.computed(()=>{if(r.maxVal)return r.maxVal;const e=r.data.map(a=>Math.max(...Object.values(a.values)));return Math.max(...e)});t.computed(()=>r.data.map(e=>e.outcome));const u=t.computed(()=>Object.keys(r.data[0].values)),h=t.computed(()=>"<th></th>"+u.value.map(e=>`<th>${e}</th>`).join("")),b=t.computed(()=>r.data.map(e=>{const a=`<td>${e.outcome}</td>`,n=u.value.map(s=>{const o=e.values[s];return`
        <td class=data>
          <div class=circ>${f(o)}</div>
          <div class="value hidden"><p>${o}</p></div>
          <div class="tooltip hidden"><p>${o}</p></div>
        </td>
      `}).join("");return`<tr>${a}${n}</tr>`}).join("")),y=t.computed(()=>`
  <thead>
    ${h.value}
  </thead>
  <tbody>
    ${b.value}
  </tbody>
  `);return t.onMounted(()=>{const a=i.value.querySelectorAll("td.data");for(var n=0;n<a.length;n++){const s=a[n].querySelector("div.circ > svg > circle"),o=a[n].querySelector("div.tooltip");s.addEventListener("mouseenter",l=>{l.preventDefault(),o.classList.remove("hidden")}),s.addEventListener("mouseleave",l=>{l.preventDefault(),o.classList.add("hidden")}),s.addEventListener("mousemove",l=>{l.preventDefault(),o.style.left=l.pageX+5-window.scrollX-1+"px",o.style.top=l.pageY-o.offsetHeight-window.scrollY+1+"px"})}}),(e,a)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("table",{ref_key:"tabContainer",ref:i,innerHTML:y.value,class:"circle-tab"},null,8,m)]))}};return c.CircleTab=p,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),c}({},Vue);
