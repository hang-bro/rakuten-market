<template>
  <main class="max-w-[1920px] m-auto">
    <!-- <Header /> -->
    <iframe class="w-full h-[550px]" src="./header.html" frameborder="0"></iframe>
    <!-- <Recommend /> -->
    <!-- <Content /> -->
    <div
      class="bg-[url('https://image.rakuten.co.jp/arkstore/cabinet/imgrc0116673270.jpg')] bg-no-repeat"
      style="background-size: 100%"
    >
      <div class="flex w-[1200px] m-auto pt-[300px]">
        <iframe class="w-[205px] mr-10" src="./menu.html" frameborder="0"></iframe>
        <iframe class="w-full h-[4500px]" src="./content.html" frameborder="0"></iframe>
      </div>
    </div>
    <iframe class="w-full h-[500px]" src="./footer.html" frameborder="0"></iframe>
  </main>
</template>
<script lang="ts" setup>
import Footer from './components/footer.vue'
</script>
<style lang="scss" scoped></style>
