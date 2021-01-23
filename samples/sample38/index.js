var app = new Vue({
  el: '#app',
  data: {
    colorList: {
      red: '#f00',
      green: '#0f0'
    }
  },
  methods: {
    addBlue: function() {
      Vue.set(this.colorList, 'blue', '#00f')
    },
    deleteBlue: function() {
      Vue.delete(this.colorList, 'blue')
    }
  }
});
