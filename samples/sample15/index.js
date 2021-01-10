const app2 = new Vue ({
    el: '#app',
    data: {
        text: '',
    },
    watch: {
        text: function(nextText, prevText) {
            let prev = prevText
            let next = nextText
            if(!prev) prev = '(未入力)'
            if(!next) next = '(未入力)'
            alert('値が変更されました 前: ' + prev + ' → 次: ' + next)
        }
    }
})