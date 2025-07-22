HTMLWidgets.widget({
  name: 'circletab',

  type: 'output',

  factory: function(el, width, height) {
    const container = document.getElementById(el.id)

    const app = Vue.createApp({})
    app.component('circle-tab', circletab.CircleTab)

    const nps = document.createElement("compare-brands")
    container.appendChild(nps)

    return {
      renderValue: function(x) {
        nps.setAttribute(":data", x.data)
        nps.setAttribute(":max-value", x.maxVal)
        nps.setAttribute("fill-color", x.fillColor)
        nps.setAttribute("stroke-width", x.strokeWidth)
        nps.setAttribute("stroke-color", x.strokeColor)
        app.mount(`#${el.id}`)
      },

      resize: function(width, height) {},

      app: app
    };
  }
});
