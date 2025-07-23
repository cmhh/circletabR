import { ref as h, computed as o, onMounted as b, createElementBlock as y, openBlock as $, createElementVNode as x } from "vue";
const g = ["innerHTML"], w = {
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
    const t = i, u = h(null), v = (e) => (console.log(`v: ${e}, mx.value: ${c.value}, r: ${e / 2 / c.value * 100}`), `
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${e / 2 / c.value * 100}"
      stroke="${t.strokeColor}"
      stroke-width="${t.strokeWidth}"
      fill="${t.fillColor}"
    />
  </svg>
  `);
    o(() => {
      const e = t.data.map((r) => Math.min(...Object.values(r.values)));
      return Math.min(...e);
    });
    const c = o(() => {
      if (t.maxVal) return t.maxVal;
      const e = t.data.map((r) => Math.max(...Object.values(r.values)));
      return Math.max(...e);
    });
    o(() => t.data.map((e) => e.outcome));
    const d = o(() => Object.keys(t.data[0].values)), m = o(() => "<th></th>" + d.value.map((e) => `<th>${e}</th>`).join("")), p = o(() => t.data.map((e) => {
      const r = `<td>${e.outcome}</td>`, s = d.value.map((n) => {
        const a = e.values[n];
        return `
        <td class=data>
          <div class=circ>${v(a)}</div>
          <div class=value><p>${a}</p></div>
          <div class="tooltip hidden">${a}</div>
        </td>
      `;
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
      const r = u.value.querySelectorAll("td.data");
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
    }), (e, r) => ($(), y("div", null, [
      x("table", {
        ref_key: "tabContainer",
        ref: u,
        innerHTML: f.value,
        class: "circle-tab"
      }, null, 8, g)
    ]));
  }
};
export {
  w as CircleTab
};
