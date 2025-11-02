import { app } from '@storybook/vue3';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
app.use(PrimeVue);

import Button from 'primevue/button';
app.component('Button', Button);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
   a11y: {
    test: 'todo'
  }
};