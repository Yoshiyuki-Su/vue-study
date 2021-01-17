<template>
  <div>
    <Header :username='name'></Header>
    <Body></Body>
    <Body></Body>
  </div>
</template>

<script>
import Header from './Header.vue'
import Body from './Body.vue'

export default {
  data(){
    return {
      name: "kiyokiyo"
    }
  },
  components: {
    Header,
    Body
  }
}
</script>
