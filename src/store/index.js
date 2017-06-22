import Vue from "vue"
import Vuex, {Store} from "vuex"
import mutations from "./mutations"

const initialState = {
  login: false,
  following_list: [],
  stared: [],
}

Vue.use(Vuex)

//we may divide the state into different modules

export default new Store({
  state: initialState,
  mutations
})
