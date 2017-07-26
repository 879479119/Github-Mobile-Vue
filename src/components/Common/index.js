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
import ButtonGroup from "./Button/ButtonGroup.vue"
import Search from "./Input/Search.vue"
import Bubble from "./Container/Bubble.vue"
import BubbleDisabled from "./Container/BubbleDisabled.vue"
import Count from "./Label/Counter.vue"
import Switcher from "./Switcher/index.vue"

Vue.component('icon', Icon)
Vue.component('btn', Button)
Vue.component('btn-group', ButtonGroup)
Vue.component('search', Search)
Vue.component('bubble', Bubble)
Vue.component('bubble-disabled', BubbleDisabled)
Vue.component('count', Count)
Vue.component('switcher', Switcher)
