<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <p><button @click="increment">+1</button> {{ count }} </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Body",
            text: "Have a good day!",
            count: 0
        }
    },
    methods: {
        increment(){
            this.count += 1;
            //★子側のデータ渡し口（$emit）
            this.$emit("add",this.count);
        }
    }
}
</script>
