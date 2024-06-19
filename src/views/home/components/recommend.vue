<template>
  <section class="mt-5 flex justify-between px-2">
    <div class="ad-left w-[200px]">
      <img class="object-cover cursor-pointer" src="@/assets/images/ad.png" alt="" />
      <img class="object-cover cursor-pointer mt-3" src="@/assets/images/ad2.png" alt="" />
    </div>
    <div class="">
      <div class="" style="height: 330px">
        <el-carousel indicator-position="outside" :interval="7000">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="w-full h-full flex items-center justify-center">
              <img class="object-cover cursor-pointer" src="@/assets/images/banner.png" alt="" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mt-5 relative">
        <img class="object-cover cursor-pointer" src="@/assets/images/shop_basket.png" alt="" />
        <div class="absolute bottom-16 right-7 w-[95%] h-[45%] flex items-center justify-between px-5">
          <router-link to="" v-for="item in 5">
            <img
              class="object-cover cursor-pointer w-[200px] h-[200px]"
              src="@/assets/images/shop_basket_item.png"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
    <!-- ad -->
    <div class="ad-right w-[200px]">
      <img class="object-cover cursor-pointer" src="@/assets/images/ad.png" alt="" />
      <img class="object-cover cursor-pointer mt-3" src="@/assets/images/ad2.png" alt="" />
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>

</style>
