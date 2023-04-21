<template lang='pug'>
.p-2(class='max-w-[24rem]')
  Form(
    ref='authForm'
    :model='form'
    :rules='rules'
    hide-required-mark
  )
    FormItem.flex-col(label='Email' prop='email')
      Input(v-model='form.email' type='email')
    FormItem.flex-col(label='Password' prop='password')
      Input(v-model='form.password' type='password')

    Button(
      type='primary'
      html-type='submit'
      :disabled='valid'
      @click.prevent='submitForm'
      :loading='logInLoading'
    ) Log in
</template>

<script lang='ts'>
import axios from 'axios';
import { mapActions } from 'pinia';
import { useAppStore } from '@/plugins/pinia/stores';

export default {
  name: 'LoginPage',
  data() {
    return {
      logInLoading: false,
      valid: false,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [{ required: true, message: 'Required field' }],
        password: [{ required: true, message: 'Required field' }]
      }
    }
  },
  methods: {
    ...mapActions(useAppStore, ['setJwt']),

    submitForm() {
      this.loginRequest();
    },

    loginRequest() {
      this.logInLoading = false;

      this.$axios.post('/auth/login', this.form)
        .then((response) => {
          console.log(response)
          if (response?.data?.token) {
            this.setJwt(response.data.token);
            return this.$goTo('Dashboard');
          }

          throw new Error(response.statusText);
        })
        .catch((e) => {
          console.warn(e);
        })
        .finally(() => this.logInLoading = false);
    }
  }
};
</script>
