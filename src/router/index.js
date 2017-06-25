import Hello from '@/components/Hello'
import Home from "../view/Home/Home.vue"

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/a',
    name: 'A',
    component: Hello
  },
]
