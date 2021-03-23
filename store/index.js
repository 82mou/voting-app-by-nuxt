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
    e: {
      count: 0,
      name: "えええ",
      sound: 3,
    },
  },
  countStop: false,
  countHide: false,
  pushComments: {},
});

export const getters = {
  //  authenticated(state) {
  //   return state.cognitoUser != null && state.authenticatedMember != null
  // },
};

export const mutations = {
  // setTitle(state, { value }) {
  //   state.title = value;
  // },
};

export const actions = {
  // increment(state) {
  //   state.counter++;
  // },
};
