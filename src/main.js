import {createApp} from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'

createApp(App).use(lazyPlugin, {
    loading: require('./assets/images/default.png')
}).use(store).use(router).mount('#app')
