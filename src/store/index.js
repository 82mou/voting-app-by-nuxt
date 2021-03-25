export const state = () => ({
  title: "タイトルが入ります。",
  panels: {
    a: {
      count: 0,
      name: "あああ",
      sound: 0,
    },
    b: {
      count: 0,
      name: "いいい",
      sound: 1,
    },
    c: {
      count: 0,
      name: "ううう",
      sound: 2,
    },
    d: {
      count: 0,
      name: "えええ",
      sound: 3,
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
          console.log(doc.data().text);
          commit("setTitle", doc.data().text);
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
};
