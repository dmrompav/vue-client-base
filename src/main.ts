import 'tailwindcss/tailwind.css';
import 'view-ui-plus/dist/styles/viewuiplus.css';

import router, { goToPlugin } from '@/plugins/router';
import pinia from '@/plugins/pinia';
import viewUIPlus from './plugins/view-ui-plus';

import { createApp } from 'vue';
import App from './App.vue';
import axiosPlugin from './plugins/axiosPlugin';

createApp(App)

  .use(router)
  .use(pinia)
  .use(viewUIPlus)
  .use(axiosPlugin)
  .use(goToPlugin)

  .mount('#app');
