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

new Vue({

    template: `
        <Frame>
            <home />
        </Frame>`,

    components: {
        home
    }
}).$start();