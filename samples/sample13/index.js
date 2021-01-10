const app2 = new Vue ({
    el: '#app',
    data: {
        items: ['大吉', '中吉', '小吉', '吉', '凶', '大凶'],
        fortune: 'ここに表示されるよ'
    },
    methods: {
        submit: function() {
            const items = this.items
            let item = items[Math.floor(Math.random() * items.length)]
            this.fortune = item
        }
    }
})