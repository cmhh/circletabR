import { ref as f, computed as l, onMounted as b, createElementBlock as y, openBlock as $, createElementVNode as x } from "vue";
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
    const t = i, d = f(null), v = (e) => (console.log(`v: ${e}, mx.value: ${c.value}, r: ${e / 2 / c.value * 100}`), `
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${e / 2 / c.value * 100 - t.strokeWidth}"
      stroke="${t.strokeColor}"
      stroke-width="${t.strokeWidth}"
      fill="${t.fillColor}"
    />
  </svg>
  `);
    l(() => {
      const e = t.data.map((r) => Math.min(...Object.values(r.values)));
      return Math.min(...e);
    });
    const c = l(() => {
      if (t.maxVal) return t.maxVal;
      const e = t.data.map((r) => Math.max(...Object.values(r.values)));
      return Math.max(...e);
    });
    l(() => t.data.map((e) => e.outcome));
    const u = l(() => Object.keys(t.data[0].values)), p = l(() => "<th></th>" + u.value.map((e) => `<th>${e}</th>`).join("")), m = l(() => t.data.map((e) => {
      const r = `<td>${e.outcome}</td>`, s = u.value.map((n) => {
        const a = e.values[n];
        return `
        <td class=data>
          <div class=circ>${v(a)}</div>
          <div class="value hidden"><p>${a}</p></div>
          <div class="tooltip hidden"><p>${a}</p></div>
        </td>
      `;
      }).join("");
      return `<tr>${r}${s}</tr>`;
    }).join("")), h = l(() => `
  <thead>
    ${p.value}
  </thead>
  <tbody>
    ${m.value}
  </tbody>
  `);
    return b(() => {
      const r = d.value.querySelectorAll("td.data");
      for (var s = 0; s < r.length; s++) {
        const n = r[s].querySelector("div.circ > svg > circle"), a = r[s].querySelector("div.tooltip");
        n.addEventListener("mouseenter", (o) => {
          o.preventDefault(), a.classList.remove("hidden");
        }), n.addEventListener("mouseleave", (o) => {
          o.preventDefault(), a.classList.add("hidden");
        }), n.addEventListener("mousemove", (o) => {
          o.preventDefault(), a.style.left = o.pageX + 5 - 1 + "px", a.style.top = o.pageY - a.offsetHeight + 1 + "px";
        });
      }
    }), (e, r) => ($(), y("div", null, [
      x("table", {
        ref_key: "tabContainer",
        ref: d,
        innerHTML: h.value,
        class: "circle-tab"
      }, null, 8, g)
    ]));
  }
};
export {
  w as CircleTab
};
