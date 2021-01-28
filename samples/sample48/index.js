var app = new Vue({
  el: '#app',
  directives: {
    font16: {
      inserted: function(el) {
        el.style.fontSize = '16pt'
      }
    }
  }
})
