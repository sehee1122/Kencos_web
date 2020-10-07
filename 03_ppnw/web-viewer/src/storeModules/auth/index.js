import axios from 'axios'

const state = {
  user: {
    userID: '',
    userName: ''
  }
}

const mutations = {
  localLogin (state, user) {
    localStorage.setItem('user', JSON.stringify(user))
  },
  logout (state) {
    localStorage.clear()
  }
}

const actions = {
  async localLogin ({ commit }, payload) {
    const { data: user } = await axios.post(
      '/api/v1/auth/login',
      payload,
      { withCredentials: true }
    )
    commit('localLogin', user)
  },
  logout ({ commit }) {
    axios.post('/api/v1/auth/logout')
      .then(() => {
        commit('logout')
      })
      .then(() => {
        window.location.replace('/')
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
