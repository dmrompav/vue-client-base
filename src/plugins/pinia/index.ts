import { createPinia } from 'pinia';
// import { createORM } from 'pinia-orm';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia()
  // .use(createORM())
  .use(piniaPluginPersistedstate);

export default store;
