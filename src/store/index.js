import Vue from "vue"
import Vuex, {Store} from "vuex"
import mutations from "./mutations"

/**
 * the same as that in github-mobile
 */
const initialState = {
  login: false,           //login state
  following: [],          //following people from localStorage
  stared: [],             //stared repositories
  userInfo: {},           //user details, the object from server

  ac_repo: null,          //the repository that user is browsing
  ac_owner: null,         //the owner of repository
  ac_branch: 'master',    //branch
  ac_file: '',            //the file you are watching

  notification: [],       //as the name


}

Vue.use(Vuex)

//we may divide the state into different modules

export default new Store({
  state: initialState,
  mutations
})
