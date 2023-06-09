import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');