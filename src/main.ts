/*
 * @Description:
 * @Author: HYH
 * @LastEditors: HYH
 * @LastEditTime: 2023-07-28 20:11:15
 */
import '@/assets/css/base.css'
import router from '@/router'
import App from '@/App.vue'
const bootStrap = async () => {

  const app = createApp(App)
  app.use(router)

  router.isReady().then(() => {
    app.mount('#app')
  })
}

bootStrap()
