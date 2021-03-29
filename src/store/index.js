export const state = () => ({
  title: "",
  panels: {
    a: {
      count: 0,
      name: "",
      sound: 0,
    },
    b: {
      count: 0,
      name: "",
      sound: 0,
    },
    c: {
      count: 0,
      name: "",
      sound: 0,
    },
    d: {
      count: 0,
      name: "",
      sound: 0,
    },
  },
  countStop: false,
  countShow: true,
  pushComments: {},
});

export const getters = {
  //  authenticated(state) {
  //   return state.cognitoUser != null && state.authenticatedMember != null
  // },
};

export const mutations = {
  setTitle(state, value) {
    state.title = value;
  },
  setPanels(state, { id, obj }) {
    state.panels[id] = obj;
  },
};

export const actions = {
  /**
   * firebaseのDBのtitleを取得してstoreと同期
   */
  changeTitle({ commit }) {
    this.$db
      .collection("title")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setTitle", doc.data().text);
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
  /**
   * firebaseのDBのpanelsを取得してstoreと同期
   */
  changePanels({ commit }) {
    this.$db
      .collection("panels")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setPanels", { id: doc.id, obj: doc.data() });
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
  /**
   * firebaseのDBのpanelsを取得してstoreと同期
   */
  changeCount({ commit }, { panelId }) {
    this.$db
      .collection("panels")
      .doc(panelId)
      .update({
        count: this.$increment,
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  },
};
