import Vue from 'nativescript-vue';

import home from './components/home';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

Vue.registerElement(
    'CheckBox',
    () => require('@nstudio/nativescript-checkbox').CheckBox,
    {
      model: {
        prop: 'checked',
        event: 'checkedChange'
      }
    }
  );

Vue.registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

new Vue({

    template: `
        <Frame>
            <home />
        </Frame>`,

    components: {
        home
    }
}).$start();