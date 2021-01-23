Vue.directive('font16', {
  inserted: function(el) {
    el.style.fontSize = '16pt'
  }
})

var app = new Vue({
  el: '#app'
})
