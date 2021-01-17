<template>
  <div>
    <Header :username='name'></Header>
    //★親側のデータ受け取り口（イベントと関数引数）
    <Body @add="add1"></Body>
    <Body @add="add2"></Body>
    <p>total : {{ totalcount }} </p>
  </div>
</template>

<script>
import Header from './Header.vue'
import Body from './Body.vue'

export default {
  data(){
    return {
      name: "kiyokiyo",
      count1: 0,
      count2: 0,
      totalcount: 0
    }
  },
  components: {
    Header,
    Body
  },
  methods:{
    add1(count){
      this.count1 = count;
      this.totalcount = this.count1 + this.count2;
    },
    add2(count){
      this.count2 = count;
      this.totalcount = this.count1 + this.count2;
    }
  }

}
</script>
