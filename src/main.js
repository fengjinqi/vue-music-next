import {createApp} from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import '@/assets/scss/index.scss'
let src=require('@/assets/images/default.png')
createApp(App).use(lazyPlugin, {
    loading: src.default

}).use(store).use(router).directive('loading', loadingDirective).mount('#app')
