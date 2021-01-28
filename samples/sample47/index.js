Vue.component('app-heading', {
  render: function (createElement) {
    throw new Error('errsample')
  },
  renderError : function(ce, err) {
    return ce('pre', { style: { color: 'red' }}, err.stack)
  },
  props: [ 'level' ]
})

var app = new Vue({
  el: '#app',
})
