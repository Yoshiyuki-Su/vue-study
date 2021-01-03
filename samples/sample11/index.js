var app = new Vue({
  el: '#app',
  data: { seen: true },
  methods: {
    change: function(e) {
      this.seen = e.target.checked
    }
  }
});
