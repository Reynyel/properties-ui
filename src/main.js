import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases } from 'vuetify/iconsets/mdi'
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const vuetify = createVuetify({
  components,
  directives,
  icon: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App)



app.use(router)
app.use(vuetify)

app.mount('#app')
