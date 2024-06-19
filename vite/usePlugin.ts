/*
 * @Description:vite插件
 * @Author: HYH
 * @LastEditors: HYH
 * @LastEditTime: 2023-02-08 10:18:59
 */
/**
 * 根据项目所用框架 安装插件，并注册到 plugin里面去
 */
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
// 查看打包详情
/**
 * 压缩 gzip
 */
import viteCompression from 'vite-plugin-compression'
import { TYPES_PATH } from './usePath'

import { PluginOption } from 'vite'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

import { viteSingleFile } from 'vite-plugin-singlefile'
export default (isProduction?: boolean): PluginOption[] => {
  return [
    vue(),
    viteSingleFile(),

    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
    }),

    // gzip压缩
    viteCompression({
      disable: true, //是否禁用
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // 自动引入
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'], // 自动导入vue和vue-router相关函数
      dts: `${TYPES_PATH}/auto-import.d.ts`, // 生成 `auto-import.d.ts` 全局声明
      resolvers: [ElementPlusResolver()],
    }),
    // 自动引入element-plus组件
    Components({
      resolvers: [ElementPlusResolver()],
      dts: `${TYPES_PATH}/components.d.ts`, // 生成 `auto-import.d.ts` 全局声明
    }),
  ]
}
