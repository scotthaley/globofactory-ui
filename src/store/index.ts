import { createStore } from 'vuex'
import auth from './auth/auth.module';

export default createStore({
  modules: {
      auth
  }
})
