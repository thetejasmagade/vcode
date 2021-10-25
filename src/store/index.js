import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
        storage: window.sessionStorage,
  })],
  state: {
    username: "",
    useremail: "",
    isUserLoggedIn: false,
    openedCode: 0,
    htmlCode: ``,
    jsCode: ``,
    codeTitle: ``,
    codeDescription: ``,
    newEditor: true,
  },
  mutations: {
    userEmail(state, email) {
      state.useremail = email;
      state.isUserLoggedIn = true;
    },
    userName(state, name) {
      state.username = name;
    },
    logOut(state) {
      state.username = '',
      state.isUserLoggedIn = false;
    },
    openEditor(state,i) {
      state.openedCode = i;
    },
    saveHtmlCode(state, code) {
      state.htmlCode = code;
    },
    saveJsCode(state, code) {
      state.jsCode = code;
    },
    saveCodeTitle(state, title) {
      state.codeTitle = title;
    },
    saveCodeDescription(state, description){
      state.codeDescription = description;
    },
    clearEditor(state) {
      state.htmlCode = "";
      state.jsCode = "";
      state.codeTitle = "";
    },
    newEditor(state, editor) {
      state.newEditor = editor;
    },
    getCodeData(state, html, js, title, description) {
      state.htmlCode = html;
      state.jsCode = js;
      state.codeTitle = title;
      state.codeDescription = description;
    }
  },
  actions: {
  },
  modules: {
  }
})
