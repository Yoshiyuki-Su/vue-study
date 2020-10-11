var app2 = new Vue({
    el: '#app2',
    data: {
        yamanoteline: []
    },
    mounted: function() {
        var self = this;
        axios
            .get('./data.json')
            .then(function(response) {
                self.yamanoteline = response.data.yamanoteline;
            })
            .catch(function(error) {
                console.log('取得に失敗しました。', error);
            })
    }
})

// ルートオプションを渡してVue Routerを初期化します
var router = new VueRouter({
    // 各ルートにコンポーネントをマッピングします
    routes: [
        {
            path: '/',
            component: {
                template: `
                    <div>
                        <h1>トップページです。</h1>
                    </div>
                `
            }
        },
        {
            path: '/fruits',
            component: {
                template: `
                    <div>
                        <h1>フルーツ一覧ページです。</h1>
                        <div v-for="fruit in fruits" :key="fruit.id">
                        <h2>{{ fruit.name }}</h2>
                        </div>
                    </div>
                `,
                data () {
                    return {
                    fruits: [
                        {
                            id: 1,
                            name: 'りんご'
                        },
                        {
                            id: 2,
                            name: 'みかん'
                        },
                        {
                            id: 3,
                            name: 'バナナ'
                        },
                        {
                            id:4,
                            name: 'メロン'
                        }
                    ]
                    }
                }
            }
        },
        {
            path: '/line',
            component: {
                template: `
                    <div>
                        <h1>山手線一覧ページです。</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>address</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="line in yamanoteline">
                                    <td>{{ line.name }}</td>
                                    <td>{{ line.address }}</td>
                                    <td>{{ line.url }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `,
                data () {
                    return {
                        yamanoteline
                    }
                }
            }
        }
    ]
})

// Vueの初期化を行います
var app = new Vue({
    router: router
}).$mount('#app')
