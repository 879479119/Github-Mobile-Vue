import Hello from '../components/Hello.vue'
import Home from "../view/Home/Home.vue"

export default [
  //entry route
  {
    path: '/',
    component: Home
  },
  //the dashboard part
  {
    path: '/dashboard',
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
  //explore and trending
  {
    path: '/explore',
    component: Hello
  },
  //user center and details
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
  //organization
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
  //repository information
  {
    path: '/repo',
    component: Hello,
    children: [
      {
        path: 'code',
        component: Home,
        children: [
          {
            path: 'file',
            component: Hello
          },
        ]
      },
      {
        path: 'commit',
        component: Home
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
  //activity
  {
    path: '/activity',
    component: Hello
  },
  //search
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
