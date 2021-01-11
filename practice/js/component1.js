var data = {
    message: 'こんにちは',
    name: 'ハム太郎'
}

Vue.component('hello', {
    template:'<p>こんちゃっす！</p>'
});

var vm = new Vue({
    data: data,
    conputed: {
        myData: function() {
            return this.$data;
        }
    }
})

var vm2 = new Vue({
    data: data,
    // conputed: {
    //     myData: function() {
    //         return this.$data;
    //     }
    // }
})

vm.$mount('#app')
vm2.$mount('#app4')