import { App } from 'vue';
import axios from 'axios';
import { useAppStore } from '../pinia/stores';
import { mapState } from 'pinia';

export default {
  install(app: App<Element>) {
    app.mixin({
      computed: {
        ...mapState(useAppStore, ['jwt']),

        $baseURL() {
          return 'http://localhost:5000';
        },

        $axiosApi() {
          return axios.create({
            baseURL: `${this.$baseURL}/api`,
            headers: {
              'Authorization': `Bearer ${this.jwt}`
            }
          });
        },

        $axios() {
          return axios.create({
            baseURL: this.$baseURL,
            headers: {
              'Authorization': `Bearer ${this.jwt}`
            }
          });
        }
      }
    })
  }
};