import { App } from 'vue';

import {
  Alert,
  Button,
  Form,
  FormItem,
  Input
} from 'view-ui-plus';

export default {
  install(app: App<Element>) {
    app.component('Alert', Alert);
    app.component('Button', Button);
    app.component('Form', Form);
    app.component('FormItem', FormItem);
    app.component('Input', Input);
  }
};