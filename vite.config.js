import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    vue(),
    Pages(),
    // Pages({
    //   //想改成自訂router時
    //   pagesDir: [
    //     { dir: "src/pages", baseRoute: "" },
    //     { dir: "src/components", baseRoute: "" },
    //   ],
    // }),
    Components({ 
      resolvers: IconsResolver({
        prefix: false, //移除icon component起頭的大寫i
        enabledCollections: ['heroicons-outline','heroicons-solid','dashicons'] //使用到的icon風格
      }),
    }),
    Icons({ /* options */ }),
  ]
})
