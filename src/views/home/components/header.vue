<template>
  <header class="h-20">
    <router-link to="">
      <img class="h-full object-cover cursor-pointer" src="@/assets/images/header_ad.png" alt="" />
    </router-link>
  </header>

  <section class="m-auto w-[1200px] flex items-end justify-between gap-28 mt-2">
    <router-link to="">
      <img src="@/assets/images/logo.png" alt="" />
    </router-link>
    <div class="flex-1">
      <div class="flex justify-between items-end">
        <div class="relative">
          <input
            class="!w-[550px] h-10 outline-none border-2 border-red-500 rounded-full indent-4 placeholder:text-sm placeholder:text-gray-400 input-after"
            placeholder="製品名を入力してください"
          />
          <button
            class="absolute w-[77px] h-full top-0 right-0 text-white bg-[#F01303] focus:outline-none rounded-full flex items-center justify-center"
          >
            <svg
              class="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <img src="@/assets/images/sale.png" class="" alt="" />
      </div>
      <div class="flex mt-3 gap-10 text-[#434343] text-lg cursor-pointer menu">
        <router-link to="">ホーム</router-link>
        <router-link to="">会社概要</router-link>
        <router-link to="">お支払い*送料</router-link>
        <router-link to="">お買い物ガイド</router-link>
        <router-link to="">メルマガ</router-link>
        <router-link to="">お買い物カゴ</router-link>
        <router-link to="">楽天トップへ</router-link>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.menu {
  a {
    &:hover {
      @apply font-semibold underline;
    }
  }
}
</style>
