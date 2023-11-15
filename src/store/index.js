import { createStore } from 'vuex'

export default createStore({
  state: {
    // Variebles de estado global en la aplicacion
    usuario:null,
    token:null
  },
  getters: {
    // Retorna el usuario y el token
    getUsuario(state){
      return state.usuario
    },
    getToken(state){
      return state.token
    }
  },
  mutations: {
    // Modifica el valor del usuario
    setUsuario(state, usuario){
      state.usuario=usuario
    },
    setToken(state, token){
      state.token=token
    }
  },
  actions: {
    // ACCIONES PARA LOGIN Y LOGOUT
    login(context, data){
      context.commit('setUsuario', data.usuario)
      context.commit('setToken', data.token)

      localStorage.setItem('userData', JSON.stringify(data))
    },

    logout(context){
      context.commit('setUsuario', null)
      context.commit('setToken', null)

      localStorage.removeItem('userData')
    }
  },
  modules: {
  }
})
