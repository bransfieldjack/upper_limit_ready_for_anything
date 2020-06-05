// app/router/index.js
 
import Vue from 'nativescript-vue'
 
import NSVueRouter from 'nativescript-vue-router-ns'
 
import Home from '~/components/home'
import Help from '~/components/help'
 
Vue.use(NSVueRouter)
 
const routes = [
  {
    name: 'home',
    component: Home,
    meta: { auth: true }
  },
  {
    name: 'help',
    component: Help,
    meta: { guest: true }
  }
]
 
const router = new NSVueRouter({
  ignoreSame, // <-- Optional. Will set if reject or accept navigate to same current component.
  routes,
  /* eslint-disable-next-line no-undef  */
  verbose: TNS_ENV !== 'production' // <-- Optional. Will output the warnings to console.
})
 
export default router 


// jake has tits