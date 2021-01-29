var myMixin = {
  methods: {
    hello: function() {
      alert("Hello!!!!");
    }
  }
}
var app = new Vue({
  el: '#app',
  mixins: [ myMixin ]
})
