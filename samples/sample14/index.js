const app2 = new Vue ({
    el: '#app',
    data: {
        name : '',
        greeting: '',
        honorific: '',
        greetings: [ 'おはよう', 'こんにちは', 'こんばんは', 'おやすみ'],
        honorifics: ['さん', 'くん', 'ちゃん', '様', '殿']
    },
    computed: {
        message: function() {
            return this.greeting + ' ' + this.name + ' ' + this.honorific
        }
    }
})