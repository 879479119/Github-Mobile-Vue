/**
 * @author rocksama
 * @created 2017/6/22
 * @description
 */

import {
  CHANGE
} from "./mutationTypes"

export default {
  [CHANGE](state, {payload}){
    console.info(payload)
    state.login = true
  }
}
