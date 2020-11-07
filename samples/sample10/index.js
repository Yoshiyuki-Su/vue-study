var app = new Vue({
  el: '#app',
  watch: {
    message: function(newVal, oldVal) {
      this.error.require = (newVal.length < 1) ? true : false;
      this.error.tooLong = (newVal.length > this.input_size) ? true : false;
    },
    input_size: function () {
      this.error.noNumber = ((this.input_size.length < 1) && (isFinite(this.input_size))) ? true : false;
    }
  },
  data: {
    input_size: 5,
    message: 'Hello',
    error: {
      require: false,
      tooLong: false,
      noNumber: false
    }
  }
})
