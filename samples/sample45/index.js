var app = new Vue({
  el: '#app',
  data: {
    message: 'new',
    newmsg: 'new',
    oldmsg: 'old'
  },
  watch: {
    message: function(newVal, oldVal) {
      this.newmsg = newVal;
      this.oldmsg = oldVal;
    }
  },
  methods: {
    change: function(e) {
      this.message = e.target.form.input.value;
    }
  }
})
