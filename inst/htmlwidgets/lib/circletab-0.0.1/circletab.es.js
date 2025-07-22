import { ref as h, computed as o, onMounted as b, createElementBlock as y, openBlock as $, createElementVNode as x } from "vue";
const g = ["innerHTML"], _ = {
  __name: "CircleTab",
  props: {
    data: {
      type: Object,
      required: !0
    },
    maxVal: {
      type: Number,
      required: !1
    },
    fillColor: {
      type: String,
      required: !1,
      default: "rgba(59, 130, 246, .5)"
    },
    strokeWidth: {
      type: Number,
      required: !1,
      default: 2
    },
    strokeColor: {
      type: String,
      required: !1,
      default: "#666"
    }
  },
  setup(i) {
    const e = i, c = h(null), u = (t) => `
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="50" 
      cy="50" 
      r="${t / 2 / v.value * 100}" 
      stroke="${e.strokeColor}" 
      stroke-width="${e.strokeWidth}" 
      fill="${e.fillColor}" 
    />
  </svg>
  `;
    o(() => {
      const t = e.data.map((r) => Math.min(...Object.values(r.values)));
      return Math.min(...t);
    });
    const v = o(() => {
      if (e.maxVal) return e.maxVal;
      const t = e.data.map((r) => Math.max(...Object.values(r.values)));
      return Math.min(...t);
    });
    o(() => e.data.map((t) => t.outcome));
    const d = o(() => Object.keys(e.data[0].values)), m = o(() => "<th></th>" + d.value.map((t) => `<th>${t}</th>`).join("")), p = o(() => e.data.map((t) => {
      const r = `<td>${t.outcome}</td>`, s = d.value.map((n) => {
        const a = t.values[n];
        return `<td class=data><div class=circ>${u(a)}</div><div class=value><p>${a}</p></div><div class="tooltip hidden">${a}</div></td>`;
      }).join("");
      return `<tr>${r}${s}</tr>`;
    }).join("")), f = o(() => `
  <thead>
    ${m.value}
  </thead>
  <tbody>
    ${p.value}
  </tbody>
  `);
    return b(() => {
      const r = c.value.querySelectorAll("td.data");
      for (var s = 0; s < r.length; s++) {
        const n = r[s].querySelector("div.circ > svg > circle"), a = r[s].querySelector("div.tooltip");
        n.addEventListener("mouseover", (l) => {
          a.classList.remove("hidden");
        }), n.addEventListener("mouseout", (l) => {
          a.classList.add("hidden");
        }), n.addEventListener("mousemove", (l) => {
          l.preventDefault(), a.style.left = l.offsetX - 5 + "px", a.style.top = l.offsetY - a.offsetHeight - 5 + "px";
        });
      }
    }), (t, r) => ($(), y("div", null, [
      x("table", {
        ref_key: "tabContainer",
        ref: c,
        innerHTML: f.value,
        class: "circle-tab"
      }, null, 8, g)
    ]));
  }
};
export {
  _ as CircleTab
};
