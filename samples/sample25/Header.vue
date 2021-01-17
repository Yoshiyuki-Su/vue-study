<template>
    <div>
        <h1>{{ title }}</h1>
        <p>Welcome! {{ username }}!</p>
    </div>
</template>

<script>
export default {
　　//★子コンポーネント側ではpropsを使ってデータを受け取ります。
    props: {
        username: String
    },
    data(){
        return {
            title: "Header Sample25!",
            text: "Hello Vue.js!"
        }
    }
}
</script>

<style scoped>
div{
    border: 1px solid blue
}
h1{
    color: blue
}
p{
    color:blue
}
</style>
