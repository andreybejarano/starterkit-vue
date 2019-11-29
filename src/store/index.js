import Vue from 'vue';
import Vuex from 'vuex';

import homeStore from './home';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    modules: {
      home: homeStore
    }
  });
}
