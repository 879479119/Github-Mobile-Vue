<template>
  <div class="hello">
    <n :nav="['a','b','c']" :baseUrl="'/a/s'"></n>
    <h1>{{ abc }}</h1>
    <search></search>
    <h2 @click="click">Essential Links</h2>
    <icon :type="'star-o'"></icon>
    <btn><icon type="github"></icon>i am your father</btn>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Header from '../components/Common/Header/index.vue'
import Nav from '../components/Common/Header/Nav.vue'

export default {
  name: 'hello',
  components: {
    t: Header,
    n: Nav
  },
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
