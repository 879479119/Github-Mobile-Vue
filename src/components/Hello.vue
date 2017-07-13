<template>
  <div class="hello">
    <h1>{{ abc }}</h1>
    <h2 @click="click">Essential Links</h2>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState({
    abc: 'login'
  }),
  methods: {
    ...mapMutations(['CHANGE']),
  	click(){
      this.CHANGE( {payload: 2333})
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
