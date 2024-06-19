import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [
      // {
      //   path: 'dashboard',
      //   name: 'dashboard',
      //   component: () => import('@/views/dashboard/index.vue'),
      //   meta: {
      //     title: 'dashboard',
      //   },
      // },
    ],
  },

  /*************************** 独立页面 end *****************************/
]
