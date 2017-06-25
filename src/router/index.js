import Hello from '@/components/Hello'
import Home from "../view/Home/Home.vue"

export default [
  //entry route
  {
    path: '/',
    component: Hello
  },
  //the dashboard part
  {
    path: '/dashboard',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'pr',
        component: Hello
      },
      {
        path: 'issue',
        component: Hello
      },
    ]
  },
  //explore andtrending
  {
    path: '/eplore',
    component: Hello
  },
  {
    path: '/user',
    component: Hello,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'repository',
        component: Hello
      },
      {
        path: 'star',
        component: Hello
      },
      {
        path: 'follower',
        component: Hello
      },
      {
        path: 'following',
        component: Hello
      }
    ]
  },
  {
    path: '/org',
    component: Hello,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'repository',
        component: Hello
      }
    ]
  },
  {
    path: '/repo',
    component: Hello,
    children: [
      {
        path: 'code',
        component: Home,
        children: [
          {
            path: 'commit',
            component: Hello
          },
          {
            path: 'file',
            component: Hello
          },
        ]
      },
      {
        path: 'issue',
        component: Hello,
        children: [
          {
            path: '',
            component: Hello
          },
          {
            path: 'detail',
            component: Hello
          },
        ]
      },
      {
        path: 'pr',
        component: Hello
      },
      {
        path: 'pulse',
        component: Hello
      }
    ]
  },
  {
    path: '/activity',
    component: Hello
  },
  {
    path: '/search',
    component: Hello,
    children: [
      {
        path: '',
        component: Hello
      },
      {
        path: 'repo',
        component: Hello
      },
      {
        path: 'commit',
        component: Hello
      },
      {
        path: 'user',
        component: Hello
      },
      {
        path: 'issue',
        component: Hello
      },
    ]
  },

]
