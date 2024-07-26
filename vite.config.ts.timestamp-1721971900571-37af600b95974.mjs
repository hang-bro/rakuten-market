// vite.config.ts
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.8_@types+node@20.2.3_sass@1.62.1/node_modules/vite/dist/node/index.js";

// vite/usePlugin.ts
import vue from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.2.3_vite@4.4.8_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.16.2_@vueuse+core@10.3.0_rollup@4.18.0/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.24.1_rollup@4.18.0_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Components from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.24.1_rollup@4.18.0_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import viteCompression from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-compression@0.5.1_vite@4.4.8/node_modules/vite-plugin-compression/dist/index.mjs";

// vite/usePath.ts
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\1\\Desktop\\market\\vite";
var BUILD_PATH = path.join(__vite_injected_original_dirname, "../../nginx-1.22.0/html");
var SVG_PATH = path.join(__vite_injected_original_dirname, "../src/assets/svg");
var TYPES_PATH = path.join(__vite_injected_original_dirname, "../src/@types");

// vite/usePlugin.ts
import { createStyleImportPlugin, ElementPlusResolve } from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-style-import@2.0.0_vite@4.4.8/node_modules/vite-plugin-style-import/dist/index.mjs";
import { viteSingleFile } from "file:///C:/Users/1/Desktop/market/node_modules/.pnpm/vite-plugin-singlefile@2.0.1_rollup@4.18.0_vite@4.4.8/node_modules/vite-plugin-singlefile/dist/esm/index.js";
var usePlugin_default = (isProduction) => {
  return [
    vue(),
    viteSingleFile(),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()]
    }),
    // gzip压缩
    viteCompression({
      disable: true,
      //是否禁用
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    }),
    // 自动引入
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      // 自动导入vue和vue-router相关函数
      dts: `${TYPES_PATH}/auto-import.d.ts`,
      // 生成 `auto-import.d.ts` 全局声明
      resolvers: [ElementPlusResolver()]
    }),
    // 自动引入element-plus组件
    Components({
      resolvers: [ElementPlusResolver()],
      dts: `${TYPES_PATH}/components.d.ts`
      // 生成 `auto-import.d.ts` 全局声明
    })
  ];
};

// vite.config.ts
var __vite_injected_original_dirname2 = "C:\\Users\\1\\Desktop\\market";
var vite_config_default = defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd());
  console.log({
    mode,
    command
  });
  const isProduction = mode === "production";
  return {
    // 生产或开发环境下的基础路径
    base: isProduction ? "/gold/arkstore/test" : "/",
    // 需要用到的插件数组
    plugins: usePlugin_default(isProduction),
    server: {
      // proxy: {
      //   /** '/api' */
      //   [env.VITE_BASE_API]: {
      //     target: env.VITE_BASE_URL + env.VITE_BASE_API /**http://192.168.5.240:2335 */,
      //     changeOrigin: true,
      //     rewrite: (path) => {
      //       console.log(`path ==>`,JSON.parse(JSON.stringify(path)));
      //       return path.replace(/^\/api/, '')
      //     },
      //   },
      // },
      // https: {
      //   cert: fs.readFileSync(path.join(__dirname, './keys/cert.crt')),
      //   key: fs.readFileSync(path.join(__dirname, './keys/cert.key')),
      // },
      host: true,
      port: env.VITE_FRONT_PORT
    },
    //
    resolve: {
      // 设置文件目录别名
      alias: {
        "@": resolve(__vite_injected_original_dirname2, "./src"),
        "~": resolve(__vite_injected_original_dirname2, "./"),
        "@@": resolve(__vite_injected_original_dirname2, "../nest-server")
      },
      extensions: [".js", ".ts", ".tsx", ".jsx"]
      //
    },
    build: {
      // outDir: path.join(__dirname, './market'),
      emptyOutDir: true
      // rollupOptions: {
      //   output: {
      //     chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
      //     entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
      //     assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
      //     /**
      //      * @description  清除文件名格式不正确问题
      //      * @param name
      //      * @returns
      //      */
      //     // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
      //     sanitizeFileName(name) {
      //       // eslint-disable-next-line no-control-regex
      //       const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
      //       const DRIVE_LETTER_REGEX = /^[a-z]:/i
      //       const match = DRIVE_LETTER_REGEX.exec(name)
      //       const driveLetter = match ? match[0] : ''
      //       // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
      //       // Otherwise, avoid them because they can refer to NTFS alternate data streams.
      //       let file = driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
      //       if (file.startsWith('_'))
      //         file = file.slice(1) /**去除首位字符串为 "_" , fix github page访问不了的问题*/
      //       return file
      //     },
      //     // // 最小化拆分包
      //     // manualChunks(id) {
      //     //   if (id.includes('node_modules')) {
      //     //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
      //     //   }
      //     // },
      //   },
      // },
    },
    esbuild: {
      // drop: isProduction ? ['console', 'debugger'] : [], // 删除 所有的console 和 debugger
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS91c2VQbHVnaW4udHMiLCAidml0ZS91c2VQYXRoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMVxcXFxEZXNrdG9wXFxcXG1hcmtldFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMVxcXFxEZXNrdG9wXFxcXG1hcmtldFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMS9EZXNrdG9wL21hcmtldC92aXRlLmNvbmZpZy50c1wiOy8qXHJcbiAqIEBEZXNjcmlwdGlvbjpcclxuICogQEF1dGhvcjogSFlIXHJcbiAqIEBMYXN0RWRpdG9yczogSFlIXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDctMjggMjA6MDg6NDVcclxuICovXHJcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdXNlUGx1Z2luIGZyb20gJy4vdml0ZS91c2VQbHVnaW4nXHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlLCBzc3JCdWlsZCB9KSA9PiB7XHJcbiAgLyoqXHU2ODM5XHU2MzZFIFwibW9kZVwiIFx1NTAzQyBcdThCRkJcdTUzRDZcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTRFMkRcdTc2ODQuZW52Llttb2RlXVx1NEUyRCBWSVRFX0JBU0VfVVJMIFx1NzY4NFx1NTAzQyAqL1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcclxuICBjb25zb2xlLmxvZyh7XHJcbiAgICBtb2RlLFxyXG4gICAgY29tbWFuZCxcclxuICB9KVxyXG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJ1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gXHU3NTFGXHU0RUE3XHU2MjE2XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTBCXHU3Njg0XHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XHJcbiAgICBiYXNlOiBpc1Byb2R1Y3Rpb24gPyAnL2dvbGQvYXJrc3RvcmUvdGVzdCcgOiAnLycsXHJcblxyXG4gICAgLy8gXHU5NzAwXHU4OTgxXHU3NTI4XHU1MjMwXHU3Njg0XHU2M0QyXHU0RUY2XHU2NTcwXHU3RUM0XHJcbiAgICBwbHVnaW5zOiB1c2VQbHVnaW4oaXNQcm9kdWN0aW9uKSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAvLyBwcm94eToge1xyXG4gICAgICAvLyAgIC8qKiAnL2FwaScgKi9cclxuICAgICAgLy8gICBbZW52LlZJVEVfQkFTRV9BUEldOiB7XHJcbiAgICAgIC8vICAgICB0YXJnZXQ6IGVudi5WSVRFX0JBU0VfVVJMICsgZW52LlZJVEVfQkFTRV9BUEkgLyoqaHR0cDovLzE5Mi4xNjguNS4yNDA6MjMzNSAqLyxcclxuICAgICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgLy8gICAgIHJld3JpdGU6IChwYXRoKSA9PiB7XHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGBwYXRoID09PmAsSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYXRoKSkpO1xyXG4gICAgICAvLyAgICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIGh0dHBzOiB7XHJcbiAgICAgIC8vICAgY2VydDogZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2tleXMvY2VydC5jcnQnKSksXHJcbiAgICAgIC8vICAga2V5OiBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4va2V5cy9jZXJ0LmtleScpKSxcclxuICAgICAgLy8gfSxcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgcG9ydDogZW52LlZJVEVfRlJPTlRfUE9SVCxcclxuICAgIH0sXHJcblxyXG4gICAgLy9cclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHU1MjJCXHU1NDBEXHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICAgICAgJ34nOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXHJcbiAgICAgICAgJ0BAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9uZXN0LXNlcnZlcicpLFxyXG4gICAgICB9LFxyXG4gICAgICBleHRlbnNpb25zOiBbJy5qcycsICcudHMnLCAnLnRzeCcsICcuanN4J10sXHJcbiAgICAgIC8vXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgLy8gb3V0RGlyOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9tYXJrZXQnKSxcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgIC8vIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gICBvdXRwdXQ6IHtcclxuICAgICAgLy8gICAgIGNodW5rRmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsIC8vIFx1NUYxNVx1NTE2NVx1NjU4N1x1NEVGNlx1NTQwRFx1NzY4NFx1NTQwRFx1NzlGMFxyXG4gICAgICAvLyAgICAgZW50cnlGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2hdLmpzJywgLy8gXHU1MzA1XHU3Njg0XHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAgICAgIC8vICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLCAvLyBcdThENDRcdTZFOTBcdTY1ODdcdTRFRjZcdTUwQ0YgXHU1QjU3XHU0RjUzXHVGRjBDXHU1NkZFXHU3MjQ3XHU3QjQ5XHJcbiAgICAgIC8vICAgICAvKipcclxuICAgICAgLy8gICAgICAqIEBkZXNjcmlwdGlvbiAgXHU2RTA1XHU5NjY0XHU2NTg3XHU0RUY2XHU1NDBEXHU2ODNDXHU1RjBGXHU0RTBEXHU2QjYzXHU3ODZFXHU5NUVFXHU5ODk4XHJcbiAgICAgIC8vICAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICAvLyAgICAgICogQHJldHVybnNcclxuICAgICAgLy8gICAgICAqL1xyXG4gICAgICAvLyAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3Nhbml0aXplRmlsZU5hbWUudHNcclxuICAgICAgLy8gICAgIHNhbml0aXplRmlsZU5hbWUobmFtZSkge1xyXG4gICAgICAvLyAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxyXG4gICAgICAvLyAgICAgICBjb25zdCBJTlZBTElEX0NIQVJfUkVHRVggPSAvW1xcdTAwMDAtXFx1MDAxRlwiIyQmKissOjs8PT4/W1xcXV5ge3x9XFx1MDA3Rl0vZ1xyXG4gICAgICAvLyAgICAgICBjb25zdCBEUklWRV9MRVRURVJfUkVHRVggPSAvXlthLXpdOi9pXHJcbiAgICAgIC8vICAgICAgIGNvbnN0IG1hdGNoID0gRFJJVkVfTEVUVEVSX1JFR0VYLmV4ZWMobmFtZSlcclxuICAgICAgLy8gICAgICAgY29uc3QgZHJpdmVMZXR0ZXIgPSBtYXRjaCA/IG1hdGNoWzBdIDogJydcclxuICAgICAgLy8gICAgICAgLy8gQSBgOmAgaXMgb25seSBhbGxvd2VkIGFzIHBhcnQgb2YgYSB3aW5kb3dzIGRyaXZlIGxldHRlciAoZXg6IEM6XFxmb28pXHJcbiAgICAgIC8vICAgICAgIC8vIE90aGVyd2lzZSwgYXZvaWQgdGhlbSBiZWNhdXNlIHRoZXkgY2FuIHJlZmVyIHRvIE5URlMgYWx0ZXJuYXRlIGRhdGEgc3RyZWFtcy5cclxuICAgICAgLy8gICAgICAgbGV0IGZpbGUgPSBkcml2ZUxldHRlciArIG5hbWUuc2xpY2UoZHJpdmVMZXR0ZXIubGVuZ3RoKS5yZXBsYWNlKElOVkFMSURfQ0hBUl9SRUdFWCwgJycpXHJcbiAgICAgIC8vICAgICAgIGlmIChmaWxlLnN0YXJ0c1dpdGgoJ18nKSlcclxuICAgICAgLy8gICAgICAgICBmaWxlID0gZmlsZS5zbGljZSgxKSAvKipcdTUzQkJcdTk2NjRcdTk5OTZcdTRGNERcdTVCNTdcdTdCMjZcdTRFMzJcdTRFM0EgXCJfXCIgLCBmaXggZ2l0aHViIHBhZ2VcdThCQkZcdTk1RUVcdTRFMERcdTRFODZcdTc2ODRcdTk1RUVcdTk4OTgqL1xyXG4gICAgICAvLyAgICAgICByZXR1cm4gZmlsZVxyXG4gICAgICAvLyAgICAgfSxcclxuXHJcbiAgICAgIC8vICAgICAvLyAvLyBcdTY3MDBcdTVDMEZcdTUzMTZcdTYyQzZcdTUyMDZcdTUzMDVcclxuICAgICAgLy8gICAgIC8vIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAvLyAgICAgLy8gICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgIC8vICAgICAvLyAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCkuc3BsaXQoJ25vZGVfbW9kdWxlcy8nKVsxXS5zcGxpdCgnLycpWzBdLnRvU3RyaW5nKClcclxuICAgICAgLy8gICAgIC8vICAgfVxyXG4gICAgICAvLyAgICAgLy8gfSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9LFxyXG4gICAgfSxcclxuICAgIGVzYnVpbGQ6IHtcclxuICAgICAgLy8gZHJvcDogaXNQcm9kdWN0aW9uID8gWydjb25zb2xlJywgJ2RlYnVnZ2VyJ10gOiBbXSwgLy8gXHU1MjIwXHU5NjY0IFx1NjI0MFx1NjcwOVx1NzY4NGNvbnNvbGUgXHU1NDhDIGRlYnVnZ2VyXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxXFxcXERlc2t0b3BcXFxcbWFya2V0XFxcXHZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDFcXFxcRGVza3RvcFxcXFxtYXJrZXRcXFxcdml0ZVxcXFx1c2VQbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEvRGVza3RvcC9tYXJrZXQvdml0ZS91c2VQbHVnaW4udHNcIjsvKlxyXG4gKiBARGVzY3JpcHRpb246dml0ZVx1NjNEMlx1NEVGNlxyXG4gKiBAQXV0aG9yOiBIWUhcclxuICogQExhc3RFZGl0b3JzOiBIWUhcclxuICogQExhc3RFZGl0VGltZTogMjAyMy0wMi0wOCAxMDoxODo1OVxyXG4gKi9cclxuLyoqXHJcbiAqIFx1NjgzOVx1NjM2RVx1OTg3OVx1NzZFRVx1NjI0MFx1NzUyOFx1Njg0Nlx1NjdCNiBcdTVCODlcdTg4QzVcdTYzRDJcdTRFRjZcdUZGMENcdTVFNzZcdTZDRThcdTUxOENcdTUyMzAgcGx1Z2luXHU5MUNDXHU5NzYyXHU1M0JCXHJcbiAqL1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuLy8gXHU2N0U1XHU3NzBCXHU2MjUzXHU1MzA1XHU4QkU2XHU2MEM1XHJcbi8qKlxyXG4gKiBcdTUzOEJcdTdGMjkgZ3ppcFxyXG4gKi9cclxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbidcclxuaW1wb3J0IHsgVFlQRVNfUEFUSCB9IGZyb20gJy4vdXNlUGF0aCdcclxuXHJcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luLCBFbGVtZW50UGx1c1Jlc29sdmUgfSBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZS1pbXBvcnQnXHJcblxyXG5pbXBvcnQgeyB2aXRlU2luZ2xlRmlsZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXNpbmdsZWZpbGUnXHJcbmV4cG9ydCBkZWZhdWx0IChpc1Byb2R1Y3Rpb24/OiBib29sZWFuKTogUGx1Z2luT3B0aW9uW10gPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZpdGVTaW5nbGVGaWxlKCksXHJcblxyXG4gICAgY3JlYXRlU3R5bGVJbXBvcnRQbHVnaW4oe1xyXG4gICAgICByZXNvbHZlczogW0VsZW1lbnRQbHVzUmVzb2x2ZSgpXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGd6aXBcdTUzOEJcdTdGMjlcclxuICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgIGRpc2FibGU6IHRydWUsIC8vXHU2NjJGXHU1NDI2XHU3OTgxXHU3NTI4XHJcbiAgICAgIHRocmVzaG9sZDogMTAyNDAsXHJcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxyXG4gICAgICBleHQ6ICcuZ3onLFxyXG4gICAgfSksXHJcbiAgICAvLyBcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ0B2dWV1c2UvY29yZSddLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjV2dWVcdTU0OEN2dWUtcm91dGVyXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHJcbiAgICAgIGR0czogYCR7VFlQRVNfUEFUSH0vYXV0by1pbXBvcnQuZC50c2AsIC8vIFx1NzUxRlx1NjIxMCBgYXV0by1pbXBvcnQuZC50c2AgXHU1MTY4XHU1QzQwXHU1OEYwXHU2NjBFXHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICAgIC8vIFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NWVsZW1lbnQtcGx1c1x1N0VDNFx1NEVGNlxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIGR0czogYCR7VFlQRVNfUEFUSH0vY29tcG9uZW50cy5kLnRzYCwgLy8gXHU3NTFGXHU2MjEwIGBhdXRvLWltcG9ydC5kLnRzYCBcdTUxNjhcdTVDNDBcdTU4RjBcdTY2MEVcclxuICAgIH0pLFxyXG4gIF1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDFcXFxcRGVza3RvcFxcXFxtYXJrZXRcXFxcdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMVxcXFxEZXNrdG9wXFxcXG1hcmtldFxcXFx2aXRlXFxcXHVzZVBhdGgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEvRGVza3RvcC9tYXJrZXQvdml0ZS91c2VQYXRoLnRzXCI7LypcclxuICogQERlc2NyaXB0aW9uOlxyXG4gKiBAQXV0aG9yOiBIWUhcclxuICogQExhc3RFZGl0b3JzOiBIWUhcclxuICogQExhc3RFZGl0VGltZTogMjAyMi0wOC0yOSAxNToxMzo0MVxyXG4gKi9cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbi8qKlx1ODFFQVx1NUI5QVx1NEU0OVx1NjI1M1x1NTMwNVx1OERFRlx1NUY4NCBcdTgxRUFcdTUyQThcdTYyNTNcdTUzMDVcdTUyMzBcdTY3MkNcdTU3MzBuZ2lueFx1NjcwRFx1NTJBMVx1NTY2OFx1NEUyRCovXHJcbmNvbnN0IEJVSUxEX1BBVEggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vbmdpbngtMS4yMi4wL2h0bWwnKVxyXG5cclxuLyoqc3ZnXHU1NzMwXHU1NzQwICovXHJcbmNvbnN0IFNWR19QQVRIID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3NyYy9hc3NldHMvc3ZnJylcclxuXHJcbi8qKiBAdHlwZXMgXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2Jlx1NTE2OFx1NUM0MC5kLnRzXHU2NTg3XHU0RUY2XHU1NzMwXHU1NzQwICovXHJcbmNvbnN0IFRZUEVTX1BBVEggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vc3JjL0B0eXBlcycpXHJcblxyXG5leHBvcnQge1xyXG4gIC8qKiBAdHlwZXMgXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2Jlx1NTE2OFx1NUM0MC5kLnRzXHU2NTg3XHU0RUY2XHU1NzMwXHU1NzQwICovXHJcbiAgVFlQRVNfUEFUSCxcclxuICAvKipzdmdcdTU2RkVcdTcyNDdcdThERUZcdTVGODQgKi9cclxuICBTVkdfUEFUSCxcclxuICAvKipcdTk4NzlcdTc2RUVcdTYyNTNcdTUzMDVcdThERUZcdTVGODQgKi9cclxuICBCVUlMRF9QQVRILFxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFNQSxTQUFlLGVBQWU7QUFDOUIsU0FBUyxjQUFjLGVBQWU7OztBQ0V0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxnQkFBZ0I7QUFLdkIsT0FBTyxxQkFBcUI7OztBQ1g1QixPQUFPLFVBQVU7QUFOakIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTSxhQUFhLEtBQUssS0FBSyxrQ0FBVyx5QkFBeUI7QUFHakUsSUFBTSxXQUFXLEtBQUssS0FBSyxrQ0FBVyxtQkFBbUI7QUFHekQsSUFBTSxhQUFhLEtBQUssS0FBSyxrQ0FBVyxlQUFlOzs7QURNdkQsU0FBUyx5QkFBeUIsMEJBQTBCO0FBRTVELFNBQVMsc0JBQXNCO0FBQy9CLElBQU8sb0JBQVEsQ0FBQyxpQkFBMkM7QUFDekQsU0FBTztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osZUFBZTtBQUFBLElBRWYsd0JBQXdCO0FBQUEsTUFDdEIsVUFBVSxDQUFDLG1CQUFtQixDQUFDO0FBQUEsSUFDakMsQ0FBQztBQUFBO0FBQUEsSUFHRCxnQkFBZ0I7QUFBQSxNQUNkLFNBQVM7QUFBQTtBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLGNBQWM7QUFBQTtBQUFBLE1BQzdDLEtBQUssR0FBRyxVQUFVO0FBQUE7QUFBQSxNQUNsQixXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUE7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ2pDLEtBQUssR0FBRyxVQUFVO0FBQUE7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUNGOzs7QURwREEsSUFBTUEsb0NBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxNQUFNLFNBQVMsTUFBTTtBQUUzRCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQ3ZDLFVBQVEsSUFBSTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBQ0QsUUFBTSxlQUFlLFNBQVM7QUFFOUIsU0FBTztBQUFBO0FBQUEsSUFFTCxNQUFNLGVBQWUsd0JBQXdCO0FBQUE7QUFBQSxJQUc3QyxTQUFTLGtCQUFVLFlBQVk7QUFBQSxJQUMvQixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFnQk4sTUFBTTtBQUFBLE1BQ04sTUFBTSxJQUFJO0FBQUEsSUFDWjtBQUFBO0FBQUEsSUFHQSxTQUFTO0FBQUE7QUFBQSxNQUVQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUUMsbUNBQVcsT0FBTztBQUFBLFFBQy9CLEtBQUssUUFBUUEsbUNBQVcsSUFBSTtBQUFBLFFBQzVCLE1BQU0sUUFBUUEsbUNBQVcsZ0JBQWdCO0FBQUEsTUFDM0M7QUFBQSxNQUNBLFlBQVksQ0FBQyxPQUFPLE9BQU8sUUFBUSxNQUFNO0FBQUE7QUFBQSxJQUUzQztBQUFBLElBQ0EsT0FBTztBQUFBO0FBQUEsTUFFTCxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBa0NmO0FBQUEsSUFDQSxTQUFTO0FBQUE7QUFBQSxJQUVUO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
