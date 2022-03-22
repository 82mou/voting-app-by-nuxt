<template>
  <div id="app">
    <div class="container">
      <div class="py-5">
        <h1 class="text-center p-5">Control Panel</h1>
        <div class="row">
          <div class="col-8">
            <div>
              <div class="form-group">
                <form name="title-form" @submit.prevent="onSubmitTitle">
                  <div class="input-group">
                    <span class="input-group-addon">タイトル</span>
                    <input
                      v-model="title"
                      type="text"
                      name="title"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <button type="submit" name="btn" class="btn btn-primary ml-3">送信</button>
                  </div>
                </form>
              </div>
              <div class="form-group">
                <form name="name-form-a" @submit.prevent="onSubmitPanelName('a', panelNameA)">
                  <div class="input-group">
                    <span class="input-group-addon">A</span>
                    <input v-model="panelNameA" type="text" name="name-a" class="form-control" />
                    <button type="submit" name="submit-name-a" class="btn btn-primary ml-3">送信</button>
                    <div class="form-check sound-text-box text-center mb-0 pl-3 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="0"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="1"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="2"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="3"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">無音</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value=""
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="form-group">
                <form name="name-form-b" @submit.prevent="onSubmitPanelName('b', panelNameB)">
                  <div class="input-group">
                    <span class="input-group-addon">B</span>
                    <input v-model="panelNameB" type="text" name="name-b" class="form-control" />
                    <button type="submit" name="submit-name-b" class="btn btn-primary ml-3 js-submit-name-b">
                      送信
                    </button>
                    <div class="form-check sound-text-box text-center mb-0 pl-3 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="0"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="1"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="2"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="3"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">無音</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value=""
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="form-group">
                <form name="name-form-c" @submit.prevent="onSubmitPanelName('c', panelNameC)">
                  <div class="input-group">
                    <span class="input-group-addon">C</span>
                    <input v-model="panelNameC" type="text" name="name-c" class="form-control" />
                    <button type="submit" name="submit-name-c" class="btn btn-primary ml-3 js-submit-name-c">
                      送信
                    </button>
                    <div class="form-check sound-text-box text-center mb-0 pl-3 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="0"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="1"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="2"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="3"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">無音</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value=""
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="form-group">
                <form name="name-form-d" @submit.prevent="onSubmitPanelName('d', panelNameD)">
                  <div class="input-group">
                    <span class="input-group-addon">D</span>
                    <input v-model="panelNameD" type="text" name="name-d" class="form-control" />
                    <button type="submit" name="submit-name-d" class="btn btn-primary ml-3 js-submit-name-d">
                      送信
                    </button>
                    <div class="form-check sound-text-box text-center mb-0 pl-3 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="0"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="1"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="2"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="3"
                        />
                      </label>
                    </div>
                    <div class="form-check sound-text-box text-center mb-0 pl-2 pr-2">
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0 mr-3">無音</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value=""
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-outline-danger" @click.prevent="clearTitle">入力クリア</button>
            </div>
          </div>
          <div class="col-4">
            <div class="border p-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    v-model="countShow"
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                    @input="onChangeCountShow"
                  />統計数表示
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    v-model="countStop"
                    class="form-check-input"
                    type="checkbox"
                    value="option2"
                    @input="onChangeCountStop"
                  />集計停止
                </label>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-danger">オールクリア</button>
              </div>
            </div>
          </div>
        </div>
        <div class="border mt-5 p-4">
          <div class="comment-pool__headline">
            <h3>Comment</h3>
            <button type="submit" class="btn btn-outline-danger js-btn-comment-clear" @click.prevent="clearComment">
              コメントクリア
            </button>
          </div>
          <ul v-if="comments.length" class="comment-pool">
            <li v-for="(value, index) in comments" :key="`comment-${index}`">
              <p class="comment-pool__text">{{ value.text }}</p>
              <button
                type="button"
                class="btn btn-outline-primary comment-pool-btn"
                @click="renderComment = value.text"
              >
                入力
              </button>
            </li>
          </ul>
          <form name="comment-form" @submit.prevent="onRenderComment">
            <div class="form-group mt-3">
              <div class="input-group">
                <input
                  v-model="renderComment"
                  type="text"
                  name="comment"
                  maxlength="30"
                  class="form-control"
                  placeholder="コメント入力MAX30文字"
                />
                <button type="submit" name="btn" class="btn btn-primary ml-3">送信</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { db } from '@/plugins/firebase';

export default Vue.extend({
  data() {
    return {
      title: '',
      panelNameA: '',
      panelNameB: '',
      panelNameC: '',
      panelNameD: '',
      countShowFlg: false,
      countStopFlg: true,
      renderComment: '',
      comments: [],
    };
  },
  firestore: {
    comments: db.collection('comments').orderBy('createdAt', 'desc'),
  },
  computed: {
    countShow: {
      get() {
        return this.$store.state.countShow;
      },
      set(boolean) {
        this.$store.commit('setCountShow', boolean);
      },
    },
    countStop: {
      get() {
        return this.$store.state.countStop;
      },
      set(boolean) {
        this.$store.commit('setCountStop', boolean);
      },
    },
    updateComments: {
      get() {
        return this.$store.state.comments;
      },
      set(boolean) {
        this.$store.commit('setComments', boolean);
      },
    },
  },
  beforeCreate() {
    // 初期化
    this.$store.dispatch('clearRenderCommentDb');
  },
  mounted() {
    this.changeCountStop();
    this.changeCountShow();
    this.changeComments();
  },
  methods: {
    ...mapActions(['changeCountStop', 'changeCountShow', 'changeComments']),
    onSubmitTitle() {
      // @ts-ignore
      this.$store.dispatch('changeTitleDb', this.title);
    },
    onSubmitPanelName(panelId: any, panelName: any) {
      this.$store.dispatch('changePanelNameDb', { panelId, panelName });
    },
    clearTitle() {
      // TODO DBの方も消す
      // @ts-ignore
      this.title = '';
      // @ts-ignore
      this.panelNameA = '';
      // @ts-ignore
      this.panelNameB = '';
      // @ts-ignore
      this.panelNameC = '';
      // @ts-ignore
      this.panelNameD = '';
    },
    onChangeCountStop(e: any) {
      // @ts-ignore
      this.countStopFlg = !!e.target.checked;
      // @ts-ignore
      this.$store.dispatch('changeCountStopDb', this.countStopFlg);
    },
    onChangeCountShow(e: any) {
      // @ts-ignore
      this.countShowFlg = !!e.target.checked;
      // @ts-ignore
      this.$store.dispatch('changeCountShowDb', this.countShowFlg);
    },
    clearComment() {
      // @ts-ignore
      this.renderComment = '';
      this.$store.dispatch('clearCommentDb', this.renderComment);
    },
    onRenderComment() {
      // @ts-ignore
      this.$store.dispatch('changeRenderCommentDb', this.renderComment);
    },
    escapeHtml(string: any) {
      if (typeof string !== 'string') {
        return string;
      }
      // return string.replace(/[&'`"<>]/g, function (match) {
      //   return {
      //     "&": "&amp;",
      //     "'": "&#x27;",
      //     "`": "&#x60;",
      //     '"': "&quot;",
      //     "<": "&lt;",
      //     ">": "&gt;",
      //   }[match];
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/bootstrap';

.comment-pool {
  padding-left: 0;
  > li {
    padding: 10px 0;
    overflow: hidden;
    list-style: none;
    border-top: 1px solid #ddd;
    &:last-child {
      border-bottom: 1px solid #ddd;
    }
    button {
      float: right;
    }
  }
}
.comment-pool__headline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.comment-pool__text {
  display: block;
  margin-bottom: 0;
  padding: 8px 0;
  float: left;
}
.sound-text-box {
  line-height: 1;
}
.sound-text {
  font-size: 12px;
}
.sound-text-label {
  line-height: 1;
}
.sound-checkbox {
  display: inline-block;
  margin-left: -8px !important;
}
</style>
