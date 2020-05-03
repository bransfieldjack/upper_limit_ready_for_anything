import Vue from 'nativescript-vue';
import home from './components/home';
import router from './router'

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
    router,
    render: h => h('frame', [h(home)]), // <-- Main Frame in render app
    
}).$start();