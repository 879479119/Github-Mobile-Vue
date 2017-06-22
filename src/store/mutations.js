/**
 * @author rocksama
 * @created 2017/6/22
 * @description
 */




export default {
  ADD(state, {payload}){
    console.info(payload)
    state.login = true
  }
}
