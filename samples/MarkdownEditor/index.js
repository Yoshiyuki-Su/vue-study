var app = new Vue({
  el: "#editor",
  data: {
    input: "# hello"
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });  // サニタイズをtrueにし、危険なコードを文字列として処理する
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300) // 300msec毎にまとめて処理を実行
  }
});
