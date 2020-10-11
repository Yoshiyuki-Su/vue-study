new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    loginId: null,
    password1: null,
    password2: null,
    email: null
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.loginId && password1 && password2 && email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('ユーザー名を入力してください。');
      }
      if (!this.loginId) {
        this.errors.push('ユーザーIDを入力してください。');
      }

      if (!this.password1) {
        this.errors.push('パスワードを入力してください。');
      }

      if (!this.password2) {
        this.errors.push('パスワード(確認用)を入力してください。');
      }

      if (!this.email) {
        this.errors.push('メールアドレスを入力してください。');
      }

      e.preventDefault();
    }
  }
})