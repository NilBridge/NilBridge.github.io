import Vue from 'vue';
import myComponent from '../components/my-component.js';
export default config => {
  if (!config.isServer) {
      Vue.component('myComponent', myComponent);
  }
}