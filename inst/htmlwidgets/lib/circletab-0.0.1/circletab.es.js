import { ref as f, computed as l, onMounted as b, createElementBlock as y, openBlock as $, createElementVNode as x } from "vue";
const g = ["innerHTML"], k = {
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
    const a = i, d = f(null), v = (e) => {
      const t = Math.sqrt(c.value / Math.PI), o = e / c.value, r = Math.sqrt(o / Math.PI) / t * 50 - a.strokeWidth;
      return console.log(`v: ${e}, mx.value: ${c.value}, r: ${r}`), `
  <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="${r}"
      stroke="${a.strokeColor}"
      stroke-width="${a.strokeWidth}"
      fill="${a.fillColor}"
    />
  </svg>
  `;
    };
    l(() => {
      const e = a.data.map((t) => Math.min(...Object.values(t.values)));
      return Math.min(...e);
    });
    const c = l(() => {
      if (a.maxVal) return a.maxVal;
      const e = a.data.map((t) => Math.max(...Object.values(t.values)));
      return Math.max(...e);
    });
    l(() => a.data.map((e) => e.outcome));
    const u = l(() => Object.keys(a.data[0].values)), p = l(() => "<th></th>" + u.value.map((e) => `<th>${e}</th>`).join("")), m = l(() => a.data.map((e) => {
      const t = `<td>${e.outcome}</td>`, o = u.value.map((n) => {
        const r = e.values[n];
        return `
        <td class=data>
          <div class=circ>${v(r)}</div>
          <div class="value hidden"><p>${r}</p></div>
          <div class="tooltip hidden"><p>${r}</p></div>
        </td>
      `;
      }).join("");
      return `<tr>${t}${o}</tr>`;
    }).join("")), h = l(() => `
  <thead>
    ${p.value}
  </thead>
  <tbody>
    ${m.value}
  </tbody>
  `);
    return b(() => {
      const t = d.value.querySelectorAll("td.data");
      for (var o = 0; o < t.length; o++) {
        const n = t[o].querySelector("div.circ > svg > circle"), r = t[o].querySelector("div.tooltip");
        n.addEventListener("mouseenter", (s) => {
          s.preventDefault(), r.classList.remove("hidden");
        }), n.addEventListener("mouseleave", (s) => {
          s.preventDefault(), r.classList.add("hidden");
        }), n.addEventListener("mousemove", (s) => {
          s.preventDefault(), r.style.left = s.pageX + 5 - window.scrollX - 1 + "px", r.style.top = s.pageY - r.offsetHeight - window.scrollY + 1 + "px";
        });
      }
    }), (e, t) => ($(), y("div", null, [
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
  k as CircleTab
};
