/*
 * @Description:
 * @Author: HYH
 * @LastEditors: HYH
 * @LastEditTime: 2023-07-17 15:28:41
 */
// 导入router所需的方法
import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './routes'

// 路由参数配置
const router = createRouter({
  // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
  history: createWebHashHistory(),
  routes,
})

// 全局前置守卫，这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
  // console.log(`to, from, ==>`,to, from,);
  next()
})

// 全局后置钩子，这里可以加入改变页面标题等操作
router.afterEach((to, from) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  } else {
    // document.title = 'doc'
  }
})

// 导出默认值
export default router
