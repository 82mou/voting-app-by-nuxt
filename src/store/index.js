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
  comments: {},
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
  setPanels(state, { panelId, obj }) {
    state.panels[panelId] = obj;
  },
  setCount(state, { panelId, count }) {
    state.panels[panelId].count = count;
  },
  setComments(state, { id, obj }) {
    state.comments[id] = obj;
  },
};

export const actions = {
  /**
   * DBのtitleを更新しstore更新のactionを呼ぶ
   */
  changeTitleDb({ dispatch }, title) {
    this.$db
      .collection("title")
      .doc("vvHrtBzRHrX9ABc7Tbu3")
      .update({
        text: title,
      })
      .then(() => {
        dispatch("changeTitle");
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },
  /**
   * DBのtitleを取得してstoreと同期
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
   * DBのpanelsを取得してstoreと同期
   */
  changePanels({ commit }) {
    this.$db
      .collection("panels")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setPanels", { panelId: doc.id, obj: doc.data() });
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
  /**
   * DBのpanelsのカウントを更新しstore更新のactionを呼ぶ
   */
  changeCountDb({ dispatch }, panelId) {
    this.$db
      .collection("panels")
      .doc(panelId)
      .update({
        count: this.$increment,
      })
      .then(() => {
        dispatch("changeCount", panelId);
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },
  /**
   * panelsのcountを更新
   */
  changeCount({ commit }, panelId) {
    this.$db
      .collection("panels")
      .doc(panelId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit("setCount", { panelId, count: doc.data().count });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },
  /**
   * DBのコメントを更新しstore更新のactionを呼ぶ
   */
  changeCommentDb({ dispatch }, commentText) {
    this.$db
      .collection("comments")
      .add({
        text: commentText,
      })
      .then((docRef) => {
        dispatch("changeComment", commentText);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  },
  /**
   * commentsを更新
   */
  changeComment({ commit }, commentText) {
    this.$db
      .collection("comments")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setComments", { id: doc.id, obj: doc.data() });
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
};
