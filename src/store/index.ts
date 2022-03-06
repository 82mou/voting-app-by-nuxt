export const state = () => ({
  title: '',
  panels: {
    a: {
      count: 0,
      name: '',
      sound: 0,
    },
    b: {
      count: 0,
      name: '',
      sound: 0,
    },
    c: {
      count: 0,
      name: '',
      sound: 0,
    },
    d: {
      count: 0,
      name: '',
      sound: 0,
    },
  },
  countStop: false,
  countShow: false,
  comments: [],
  renderComment: '',
  unsubscribe: null,
});

export const getters = {
  //  authenticated(state) {
  //   return state.cognitoUser != null && state.authenticatedMember != null
  // },
};

export const mutations = {
  startListener(state: { unsubscribe: Function | object }) {
    state.unsubscribe = this.$db.collection('comments').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log('change: ', change.doc.data());
      });
    });
  },
  stopListener(state: any) {
    state.unsubscribe();
  },
  setTitle(state: any, value: string) {
    state.title = value;
  },
  setPanels(state: any, { panelId, obj }: { panelId: string; obj: object }) {
    state.panels[panelId] = obj;
  },
  setPanelCount(state: any, { panelId, count }: { panelId: string; count: number }) {
    state.panels[panelId].count = count;
  },
  setPanelName(state: any, { panelId, name }: { panelId: string; name: string }) {
    state.panels[panelId].name = name;
  },
  setCountStop(state: any, boolean: boolean) {
    state.countStop = boolean;
  },
  setCountShow(state: any, boolean: boolean) {
    state.countShow = boolean;
  },
  setComments(state: any, { id, obj }: { id: string; obj: { text: string } }) {
    state.comments.push({
      id,
      text: obj.text,
    });
  },
  setClearComments(state: any) {
    state.comments = state.comments.splice(-state.comments.length);
  },
  setRenderComment(state: any, value: string) {
    state.renderComment = value;
  },
};

export const actions = {
  /**
   * DBのtitleを更新しstore更新のactionを呼ぶ
   */
  changeTitleDb({ dispatch }: { dispatch: Function }, title: string) {
    this.$db
      .collection('title')
      .doc('vvHrtBzRHrX9ABc7Tbu3')
      .update({
        text: title,
      })
      .then(() => {
        dispatch('changeTitle');
        console.log('Document successfully updated!');
      })
      .catch((error: object) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのtitleを取得してstoreと同期
   */
  changeTitle({ commit }: { commit: Function }) {
    this.$db
      .collection('title')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit('setTitle', doc.data().text);
        });
      })
      .catch((error: Function) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのpanelsを取得してstoreと同期
   */
  changePanels({ commit }) {
    this.$db
      .collection('panels')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit('setPanels', { panelId: doc.id, obj: doc.data() });
        });
      })
      .catch((error: Function) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのpanelsのnameを更新しstore更新のactionを呼ぶ
   */
  changePanelNameDb({ dispatch }, { panelId, panelName }) {
    this.$db
      .collection('panels')
      .doc(panelId)
      .update({
        name: panelName,
      })
      .then(() => {
        dispatch('changePanelName', panelId);
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * panelsのnameを更新
   */
  changePanelName({ commit }, panelId) {
    this.$db
      .collection('panels')
      .doc(panelId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('setPanelName', { panelId, count: doc.data().name });
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  },
  /**
   * DBのpanelsのカウントを更新しstore更新のactionを呼ぶ
   */
  changeCountDb({ dispatch }, panelId) {
    this.$db
      .collection('panels')
      .doc(panelId)
      .update({
        count: this.$increment,
      })
      .then(() => {
        dispatch('changeCount', panelId);
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * panelsのcountを更新
   */
  changeCount({ commit }, panelId) {
    this.$db
      .collection('panels')
      .doc(panelId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('setPanelCount', { panelId, count: doc.data().count });
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  },
  /**
   * DBのコメントを更新しstore更新のactionを呼ぶ
   */
  changeCommentDb({ dispatch }, commentText) {
    this.$db
      .collection('comments')
      .add({
        text: commentText,
      })
      .then((docRef) => {
        dispatch('changeComment', commentText);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  },
  /**
   * commentsを更新
   */
  changeComment({ commit }, commentText) {
    this.$db
      .collection('comments')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          console.log('@store/changeComment: ', commentText);
          commit('setComments', { id: doc.id, obj: doc.data() });
        });
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのcountStopを更新しstore更新のactionを呼ぶ
   */
  changeCountStopDb({ dispatch }, boolean) {
    this.$db
      .collection('countStopSwitch')
      .doc('0kVm6l0gkeOZCj2KchES')
      .update({
        countStop: boolean,
      })
      .then(() => {
        dispatch('changeCountStop');
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのcountStopを取得してstoreと同期
   */
  changeCountStop({ commit }) {
    this.$db
      .collection('countStopSwitch')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit('setCountStop', doc.data().countStop);
        });
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのcountShowを更新しstore更新のactionを呼ぶ
   */
  changeCountShowDb({ dispatch }, boolean) {
    this.$db
      .collection('countShowSwitch')
      .doc('ks5IgdHG7AxI1baZANt3')
      .update({
        countShow: boolean,
      })
      .then(() => {
        dispatch('changeCountShow');
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのcountShowを取得してstoreと同期
   */
  changeCountShow({ commit }) {
    this.$db
      .collection('countShowSwitch')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit('setCountShow', doc.data().countShow);
        });
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのcommentsを取得してstoreと同期
   */
  changeComments({ commit }) {
    this.$db
      .collection('comments')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit('setComments', { id: doc.id, obj: doc.data() });
        });
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのrenderCommentを更新しstore更新のactionを呼ぶ
   */
  changeRenderCommentDb({ dispatch }, renderComment) {
    this.$db
      .collection('renderComment')
      .doc('zJo5eHrL1SpxWxBx2sIK')
      .update({
        text: renderComment,
      })
      .then(() => {
        dispatch('changeRenderComment');
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのrenderCommentを取得してstoreと同期
   */
  changeRenderComment({ commit }) {
    this.$db
      .collection('renderComment')
      .get()
      .then((snapshot) => {
        snapshot.forEach(function (doc) {
          commit('setRenderComment', doc.data().text);
        });
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのrenderCommentを更新しstore更新のactionを呼ぶ
   */
  clearCommentDb({ dispatch }) {
    this.$db
      .collection('comments')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.$db.collection('comments').doc(doc.id).delete();
        });
        dispatch('clearComment');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのrenderCommentを取得してstoreと同期
   */
  clearComment({ commit }) {
    commit('setClearComments');
  },
};
