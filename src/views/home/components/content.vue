<template>
  <section class="w-full h-[500px] bg-[url('@/assets/images/bg1.png')]"></section>
  <section class="mt-[-300px] flex justify-between px-2">
    <div class="ad-left w-[200px] mt-[500px]">
      <img class="object-cover cursor-pointer" src="@/assets/images/ad.png" alt="" />
      <img class="object-cover cursor-pointer mt-3" src="@/assets/images/ad2.png" alt="" />
      <img class="object-cover cursor-pointer mt-3" src="@/assets/images/ad3.png" alt="" />
    </div>
    <div class="m-auto mt-0">
      <div class="text-2xl text-center mb-10">
        <div class="text-gray-700/50">ALL PRODUTS</div>
        <div>全部商品</div>
      </div>

      <div class="flex justify-between">
        <iframe src="./menu.html" frameborder="0"></iframe>
        <!--  -->
        <div class="w-[960px]">
          <div v-for="item in contentList" class="mb-5">
            <div
              style="background-size: 100% 100%"
              :style="{
                background: `url('${item.backgroundImg}')`,
              }"
              class="h-[60px] bg-no-repeat flex items-center text-white p-3"
            >
              <img class="object-cover cursor-pointer" :src="item.logo" alt="" />
              <div class="flex flex-col text-base ml-2">
                <div>{{ item.name }}</div>
                <div class="uppercase">{{ item.nameEn }}</div>
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-between mt-5">
              <router-link to="" v-for="item in 10" class="w-[180px]">
                <img
                  class="object-cover cursor-pointer w-[180px] h-[180px]"
                  src="@/assets/images/shop_basket_item.png"
                  alt=""
                />
                <div class="text-ellipsis line-clamp-2 my-1">
                  [PR] (560ml*48本セット)【いろはす(I LOHAS)】ウォーター]...
                </div>
                <div class="text-[20px] text-red-700 font-semibold mb-2">
                  4,272 <span class="text-xs">円</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ad -->
    <div class="ad-right w-[200px] mt-[500px]">
      <img class="object-cover cursor-pointer" src="@/assets/images/ad.png" alt="" />
      <img class="object-cover cursor-pointer mt-3" src="@/assets/images/ad2.png" alt="" />
      <img class="object-cover cursor-pointer mt-3" src="@/assets/images/ad3.png" alt="" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ArrowRight, Search } from '@element-plus/icons-vue'
import red_bg from '@/assets/images/red_bg.png'
import yellow_bg from '@/assets/images/yellow_bg.png'
import green_bg from '@/assets/images/green_bg.png'
import purple_bg from '@/assets/images/purple_bg.png'
import drink_logo from '@/assets/images/drink_logo.png'
import ink_logo from '@/assets/images/ink_logo.png'
import label_logo from '@/assets/images/label_logo.png'
import toner_logo from '@/assets/images/toner_logo.png'
import car_logo from '@/assets/images/car_logo.png'
import furniture_logo from '@/assets/images/furniture_logo.png'
import digital_logo from '@/assets/images/digital_logo.png'
import pet_logo from '@/assets/images/pet_logo.png'
import other_logo from '@/assets/images/other_logo.png'
const search = ref()
const contentList = ref([
  { logo: drink_logo, name: '飲 料', nameEn: 'Beverages', backgroundImg: red_bg },
  { logo: ink_logo, name: '互換インク', nameEn: 'ink cartridges', backgroundImg: yellow_bg },
  { logo: label_logo, name: '互換テープ', nameEn: 'label tapes', backgroundImg: yellow_bg },
  { logo: toner_logo, name: '互換トナー', nameEn: 'toner cartridges', backgroundImg: yellow_bg },
  { logo: car_logo, name: '车类配件', nameEn: 'Car accessories', backgroundImg: green_bg },
  { logo: furniture_logo, name: '家居用具', nameEn: 'household products', backgroundImg: green_bg },
  { logo: digital_logo, name: '数码配件', nameEn: 'Digital accessories', backgroundImg: green_bg },
  { logo: pet_logo, name: '宠物用品', nameEn: 'pet supplies', backgroundImg: green_bg },
  { logo: other_logo, name: '其  他', nameEn: 'others', backgroundImg: purple_bg },
])

const categoryList = ref([
  { name: '碳酸饮料', icon: 'c1.png' },
  { name: '茶饮', icon: 'c2.png' },
  { name: '咖啡', icon: 'c3.png' },
  { name: '果汁', icon: 'c4.png' },
  { name: '墨盒', icon: 'c5.png' },
  { name: '标签带', icon: 'c6.png' },
  { name: '硒鼓', icon: 'c7.png' },
  { name: '车身装饰', icon: 'c8.png' },
  { name: '车辆内饰', icon: 'c9.png' },
  { name: '气门嘴', icon: 'c10.png' },
  { name: '车灯', icon: 'c11.png' },
  { name: '车内收纳', icon: 'c12.png' },
  { name: 'USB车充', icon: 'c13.png' },
  { name: '车身抛光', icon: 'c14.png' },
  { name: '电压表', icon: 'c15.png' },
  { name: '钥匙扣', icon: 'c16.png' },
  { name: '厨房用具', icon: 'c17.png' },
  { name: '杯子', icon: 'c18.png' },
  { name: '浴帘', icon: 'c19.png' },
  { name: '抱枕', icon: 'c20.png' },
  { name: '地毯', icon: 'c21.png' },
  { name: '防盗锁', icon: 'c22.png' },
  { name: 'LED灯', icon: 'c23.png' },
  { name: '应急灯', icon: 'c24.png' },
  { name: '壁纸', icon: 'c25.png' },
  { name: '手机壳', icon: 'c26.png' },
  { name: '储存卡', icon: 'c27.png' },
  { name: '数据线', icon: 'c28.png' },
  { name: '手机膜', icon: 'c29.png' },
  { name: '手机支架', icon: 'c30.png' },
  { name: '拍照配件', icon: 'c31.png' },
  { name: '镜头附件', icon: 'c32.png' },
  { name: '三脚架', icon: 'c33.png' },
  { name: '音频线', icon: 'c34.png' },
  { name: '宠物玩具', icon: 'c35.png' },
  { name: '猫/狗窝', icon: 'c36.png' },
  { name: '项圈', icon: 'c37.png' },
  { name: '背带', icon: 'c38.png' },
  { name: '宠物饮水器', icon: 'c39.png' },
  { name: '宠物服饰', icon: 'c40.png' },
  { name: '宠物指甲剪', icon: 'c41.png' },
  { name: '毛发梳', icon: 'c42.png' },
  { name: '宠物训练用具', icon: 'c43.png' },
  { name: '发饰', icon: 'c44.png' },
  { name: '袖扣', icon: 'c45.png' },
  { name: '项链', icon: 'c46.png' },
  { name: '渔具', icon: 'c47.png' },
  { name: '防潮垫', icon: 'c48.png' },
  { name: '睡袋', icon: 'c49.png' },
  { name: '登山扣', icon: 'c50.png' },
  { name: '防滑钉', icon: 'c51.png' },
  { name: '太阳镜', icon: 'c52.png' },
  { name: '更多商品', icon: 'c53.png' },
])
</script>
<style lang="scss" scoped>
.serach-input {
  @apply h-full;
  :deep(.el-input__wrapper) {
    @apply rounded-full border border-red-600;
  }
  :deep(.el-input__suffix) {
    @apply text-2xl;
  }
  :deep(.is-focus) {
    @apply shadow-none;
  }
}
.category-hover {
  &:hover {
    background: linear-gradient(90deg, #fdc237 0%, #fe7902 100%);
  }
}
</style>
