import { vuexfireMutations } from 'vuexfire';
// @ts-ignore
import { db, FieldValue } from '@/plugins/firebase';

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
  renderComment: [
    {
      text: '',
    },
  ],
  unsubscribe: null,
});

export const getters = {};

export const mutations = {
  ...vuexfireMutations,
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
  setComments(state: any, { id, obj }: { id: string; obj: { createdAt: string; text: string } }) {
    state.comments.push({
      id,
      createdAt: obj.createdAt,
      text: obj.text,
    });
  },
  setClearComments(state: any) {
    state.comments = state.comments.splice(0, state.comments.length);
  },
  setRenderComment(state: any, value: string) {
    state.renderComment = value;
  },
  setClearRenderComment(state: any) {
    state.renderComment = [
      {
        text: '',
      },
    ];
  },
};

export const actions = {
  /**
   * DBのtitleを更新しstore更新のactionを呼ぶ
   */
  changeTitleDb({ dispatch }: { dispatch: Function }, title: string) {
    db.collection('title')
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
    db.collection('title')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
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
  // @ts-ignore
  changePanels({ commit }) {
    db.collection('panels')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
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
  // @ts-ignore
  changePanelNameDb({ dispatch }, { panelId, panelName }) {
    db.collection('panels')
      .doc(panelId)
      .update({
        name: panelName,
      })
      .then(() => {
        dispatch('changePanelName', panelId);
        console.log('Document successfully updated!');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * panelsのnameを更新
   */
  // @ts-ignore
  changePanelName({ commit }, panelId) {
    db.collection('panels')
      .doc(panelId)
      .get()
      // @ts-ignore
      .then((doc) => {
        if (doc.exists) {
          commit('setPanelName', { panelId, count: doc.data().name });
        } else {
          console.log('No such document!');
        }
      })
      // @ts-ignore
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  },
  /**
   * DBのpanelsのカウントを更新しstore更新のactionを呼ぶ
   */
  // @ts-ignore
  changeCountDb({ dispatch }, panelId) {
    db.collection('panels')
      .doc(panelId)
      .update({
        // @ts-ignore
        count: this.$increment,
      })
      .then(() => {
        dispatch('changeCount', panelId);
        console.log('Document successfully updated!');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * panelsのcountを更新
   */
  // @ts-ignore
  changeCount({ commit }, panelId) {
    db.collection('panels')
      .doc(panelId)
      .get()
      // @ts-ignore
      .then((doc) => {
        if (doc.exists) {
          commit('setPanelCount', { panelId, count: doc.data().count });
        } else {
          console.log('No such document!');
        }
      })
      // @ts-ignore
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  },
  /**
   * DBのコメントを更新しstore更新のactionを呼ぶ
   */
  // @ts-ignore
  changeCommentDb({ dispatch }, commentText) {
    db.collection('comments')
      .add({
        createdAt: FieldValue.serverTimestamp(),
        text: commentText,
      })
      // @ts-ignore
      .then((docRef) => {
        dispatch('changeComment', commentText);
        console.log('Document written with ID: ', docRef.id);
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  },
  /**
   * commentsを更新
   */
  // @ts-ignore
  changeComment({ commit }, commentText) {
    db.collection('comments')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach(function (doc) {
          console.log('@store/changeComment: ', commentText);
          commit('setComments', { id: doc.id, obj: doc.data() });
        });
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのcountStopを更新しstore更新のactionを呼ぶ
   */
  // @ts-ignore
  changeCountStopDb({ dispatch }, boolean) {
    db.collection('countStopSwitch')
      .doc('0kVm6l0gkeOZCj2KchES')
      .update({
        countStop: boolean,
      })
      .then(() => {
        dispatch('changeCountStop');
        console.log('Document successfully updated!');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのcountStopを取得してstoreと同期
   */
  // @ts-ignore
  changeCountStop({ commit }) {
    db.collection('countStopSwitch')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach(function (doc) {
          commit('setCountStop', doc.data().countStop);
        });
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのcountShowを更新しstore更新のactionを呼ぶ
   */
  // @ts-ignore
  changeCountShowDb({ dispatch }, boolean) {
    db.collection('countShowSwitch')
      .doc('ks5IgdHG7AxI1baZANt3')
      .update({
        countShow: boolean,
      })
      .then(() => {
        dispatch('changeCountShow');
        console.log('Document successfully updated!');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのcountShowを取得してstoreと同期
   */
  // @ts-ignore
  changeCountShow({ commit }) {
    db.collection('countShowSwitch')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach(function (doc) {
          commit('setCountShow', doc.data().countShow);
        });
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのcommentsを取得してstoreと同期
   */
  // @ts-ignore
  changeComments({ commit }) {
    db.collection('comments')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach(function (doc) {
          commit('setComments', { id: doc.id, obj: doc.data() });
        });
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのrenderCommentを更新しstore更新のactionを呼ぶ
   */
  // @ts-ignore
  changeRenderCommentDb({ dispatch }, renderComment) {
    db.collection('renderComment')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach((doc) => {
          db.collection('renderComment').doc(doc.id).update({
            text: renderComment,
          });
        });
        dispatch('changeRenderComment');
        console.log('Document successfully updated!');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのrenderCommentを取得してstoreと同期
   */
  // @ts-ignore
  changeRenderComment({ commit }) {
    db.collection('renderComment')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach(function (doc) {
          commit('setRenderComment', doc.data().text);
        });
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  },
  /**
   * DBのrenderCommentを更新しstore更新のactionを呼ぶ
   */
  // @ts-ignore
  clearCommentDb({ dispatch }) {
    db.collection('comments')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach((doc) => {
          db.collection('comments').doc(doc.id).delete();
        });
        dispatch('clearComment');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのrenderCommentを取得してstoreと同期
   */
  // @ts-ignore
  clearComment({ commit }) {
    commit('setClearComments');
  },
  /**
   * DBのrenderCommentを削除し、storeの方も削除するactionを呼ぶ
   */
  // @ts-ignore
  clearRenderCommentDb({ dispatch }) {
    db.collection('renderComment')
      .get()
      // @ts-ignore
      .then((snapshot) => {
        // @ts-ignore
        snapshot.forEach((doc) => {
          db.collection('renderComment').doc(doc.id).update({
            text: '',
          });
        });
        dispatch('clearRenderComment');
      })
      // @ts-ignore
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  },
  /**
   * DBのrenderCommentを取得してstoreと同期
   */
  // @ts-ignore
  clearRenderComment({ commit }) {
    commit('setClearRenderComment');
  },
};
