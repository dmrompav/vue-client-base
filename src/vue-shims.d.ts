import { AxiosInstance } from 'axios';
import { GoToType } from './plugins/router/types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $axiosApi: AxiosInstance;
    $goTo: GoToType
  }
}
