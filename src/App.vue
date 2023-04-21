<template lang='pug'>
LoadingCurtain(v-if='appLoading')
RouterView(v-else)
</template>

<script lang='ts'>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from './plugins/pinia/stores';
import LoadingCurtain from '@/components/loadingCurtain';

export default {
  name: 'App',
  components: {
    LoadingCurtain
  },
  created() {
    this.checkToken();
  },
  computed: {
    ...mapState(useAppStore, ['appLoading', 'jwt'])
  },
  methods: {
    ...mapActions(useAppStore, ['setAppLoading', 'setJwt']),

    checkToken(): void {
      if (!this.jwt) {
        return this.$goTo('Login');
      }

      this.setAppLoading(true);

      this.$axios.get('http://localhost:5000/auth/checkToken')
        .then((response) => {
          if (response.status === 200) {
            return this.$goTo('Dashboard');
          }

          this.$goTo('Login');
          throw new Error(response.statusText);
        })
        .catch((e) => {
          console.warn(e);
        })
        .finally(() => this.setAppLoading(false));
    }
  },
  watch: {
    $route(to, from) {
      const authEdge = [false, false];

      [to, from].forEach((route) => {
        if (route.meta && route.meta.hasOwnProperty('requiresAuth')) {
          route.meta.requiresAuth ? authEdge[0] = true : authEdge[1] = true;
        }
      });

      if (authEdge[0] && authEdge[1]) {
        console.log('ClientAuthGuard: requiredAuth meta param has been changed');
        this.checkToken();
      }
    }
  }
}
</script>
