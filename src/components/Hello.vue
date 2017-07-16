<template>
  <div class="hello">
    <t></t>
    <h1>{{ abc }}</h1>
    <h2 @click="click">Essential Links</h2>
    <icon :type="'star-o'"></icon>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Icon from '../components/Common/Icon/Icon.vue'
import Header from '../components/Common/Header/index.vue'

export default {
  name: 'hello',
  components: {
  	Icon,
    t: Header
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
