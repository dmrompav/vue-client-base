<template lang='pug'>
.p-2
  Alert(type='success') You have just been logged in
  Button(type='error' icon='md-undo' @click='logOut' :loading='logOutLoading')
    span Log out
</template>

<script lang='ts'>
import { useAppStore } from '@/plugins/pinia/stores';
import { mapActions } from 'pinia';
export default {
  name: 'Dashboard',
  data() {
    return {
      logOutLoading: false
    }
  },
  methods: {
    ...mapActions(useAppStore, ['setJwt']),

    logOut() {
      this.logOutLoading = true;

      this.$axios.post('/auth/logout')
        .then((response) => {
          this.setJwt('');
          this.$goTo('Login')
        })
        .catch((e) => {
          console.warn(e);
        })
        .finally(() => this.logOutLoading = false)
    }
  }
}
</script>

<style scoped lang='sass'>

</style>
