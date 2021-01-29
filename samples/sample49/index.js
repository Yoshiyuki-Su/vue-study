var MyComp1 = { template: '<div style="color:red">Hello!</div>' }
var MyComp2 = { template: '<div style="color:green">Hello!</div>' }
var MyComp3 = { template: '<div style="color:blue">Hello!</div>' }
var app = new Vue({
  el: '#app',
  components: {
    'my-comp1': MyComp1,
    'my-comp2': MyComp2,
    'my-comp3': MyComp3
  }
})
