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
  countShow: false,
  comments: {},
  renderComment: "",
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
  setPanelCount(state, { panelId, count }) {
    state.panels[panelId].count = count;
  },
  setPanelName(state, { panelId, name }) {
    state.panels[panelId].name = name;
  },
  setCountStop(state, boolean) {
    state.countStop = boolean;
  },
  setCountShow(state, boolean) {
    state.countShow = boolean;
  },
  setComments(state, { id, obj }) {
    state.comments[id] = obj;
  },
  setRenderComment(state, value) {
    state.renderComment = value;
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
   * DBのpanelsのnameを更新しstore更新のactionを呼ぶ
   */
  changePanelNameDb({ dispatch }, { panelId, panelName }) {
    this.$db
      .collection("panels")
      .doc(panelId)
      .update({
        name: panelName,
      })
      .then(() => {
        dispatch("changePanelName", panelId);
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },
  /**
   * panelsのnameを更新
   */
  changePanelName({ commit }, panelId) {
    this.$db
      .collection("panels")
      .doc(panelId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit("setPanelName", { panelId, count: doc.data().name });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
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
          commit("setPanelCount", { panelId, count: doc.data().count });
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
  /**
   * DBのcountStopを更新しstore更新のactionを呼ぶ
   */
  changeCountStopDb({ dispatch }, boolean) {
    this.$db
      .collection("countStopSwitch")
      .doc("0kVm6l0gkeOZCj2KchES")
      .update({
        countStop: boolean,
      })
      .then(() => {
        dispatch("changeCountStop");
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },
  /**
   * DBのcountStopを取得してstoreと同期
   */
  changeCountStop({ commit }) {
    this.$db
      .collection("countStopSwitch")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setCountStop", doc.data().countSTop);
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
  /**
   * DBのcountShowを更新しstore更新のactionを呼ぶ
   */
  changeCountShowDb({ dispatch }, boolean) {
    this.$db
      .collection("countShowSwitch")
      .doc("ks5IgdHG7AxI1baZANt3")
      .update({
        countShow: boolean,
      })
      .then(() => {
        dispatch("changeCountShow");
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },
  /**
   * DBのcountShowを取得してstoreと同期
   */
  changeCountShow({ commit }) {
    this.$db
      .collection("countShowSwitch")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setCountShow", doc.data().countShow);
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
  /**
   * DBのcommentsを取得してstoreと同期
   */
  changeComments({ commit }) {
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
  /**
   * DBのrenderCommentを更新しstore更新のactionを呼ぶ
   */
  changeRenderCommentDb({ dispatch }, renderComment) {
    this.$db
      .collection("renderComment")
      .doc("zJo5eHrL1SpxWxBx2sIK")
      .update({
        text: renderComment,
      })
      .then(() => {
        dispatch("changeRenderComment");
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },
  /**
   * DBのrenderCommentを取得してstoreと同期
   */
  changeRenderComment({ commit }) {
    this.$db
      .collection("renderComment")
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit("setRenderComment", doc.data().text);
        });
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  },
};
