import { defineStore } from 'pinia';

export const useAppStore = defineStore('App', {
  state: () => ({
    appLoading: false,
    jwt: ''
  }),
  actions: {
    setAppLoading(value: boolean) {
      return this.appLoading = value;
    },

    setJwt(value: string) {
      return this.jwt = value;
    }
  },
  persist: {
    paths: ['jwt']
  }
});
