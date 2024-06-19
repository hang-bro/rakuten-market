<template>
  <section class="bg-gray-100/20 p-10 flex justify-center gap-20">
    <img class="object-cover cursor-pointer" src="@/assets/images/footer_map.png" alt="" />
    <div class="flex flex-col gap-6 font-bold text-base">
      <div>使用信息(运费等)</div>
      <div>服务条列</div>
      <div>隐私协议</div>
      <div class="flex gap-2">
        <img class="object-cover cursor-pointer" src="@/assets/images/x.png" alt="" />
        <img class="object-cover cursor-pointer" src="@/assets/images/ins.png" alt="" />
        <img class="object-cover cursor-pointer" src="@/assets/images/face.png" alt="" />
      </div>
      <img class="object-cover cursor-pointer" src="@/assets/images/diliver.png" alt="" />
    </div>
    <div class="flex flex-col gap-3">
      <div class="font-bold">支付方式</div>
      <img class="object-cover cursor-pointer" src="@/assets/images/paypay.png" alt="" />
      <img class="object-cover cursor-pointer" src="@/assets/images/wx_pay.png" alt="" />
      <img class="object-cover cursor-pointer" src="@/assets/images/ali_pay.png" alt="" />
    </div>

    <div class="flex flex-col gap-5 text-sm">
      <div class="font-bold">联系方式</div>
      <div class="flex">
        <span>
          <img class="object-cover cursor-pointer inline" src="@/assets/images/time.png" alt="" />
          営業時間：10:00〜17:00 <br />
          <span class="ml-4">休業日：土・日・祝日・夏季休暇・年末年始</span>
        </span>
      </div>
      <div class="ml-3">
        ※ご注文は、24時間受け付けております。<br />
        ※定休日・営業時間外のご注文、ご入金、お<br />
        問い合わせは翌営業日以降の処理となります。
      </div>
      <div class="flex items-center">
        <img class="object-cover cursor-pointer inline mr-1" src="@/assets/images/tel.png" alt="" />
        <span>联系电话：000-000000 </span>
      </div>
      <div class="flex items-center">
        <img class="object-cover cursor-pointer inline mr-1" src="@/assets/images/email.png" alt="" />
        <span>邮件地址：2345156616@email.com </span>
      </div>
    </div>
  </section>

  <footer class="flex items-center justify-center h-10 w-full bg-[#F01303] text-white text-sm">
    版权所有 (C) Costcost21 保留所有权利
  </footer>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
