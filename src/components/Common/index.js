/**
 * @author rocksama
 * @created 2017/7/16
 * @description
 */

/**
 * this file is used to initialize the components that we write
 */

import Vue from "vue"
import "./index.scss"

import Icon from "./Icon/Icon.vue"
import Button from "./Button/Button.vue"
import Search from "./Input/Search.vue"

Vue.component('icon', Icon)
Vue.component('btn', Button)
Vue.component('search', Search)
