<!--
 * @Description: 
 * @Author: HYH
 * @LastEditors: HYH
 * @LastEditTime: 2023-07-28 20:03:56
-->
<template>
  <ElConfigProvider :locale="locale">
    <router-view />
  </ElConfigProvider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = ref(zhCn)

onMounted(() => {})
</script>
<style>
html,
body {
  @apply w-screen h-screen;
}
#app {
  @apply w-full h-full  overflow-visible relative;
}
</style>
