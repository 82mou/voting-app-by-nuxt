<template>
  <div>
    <div class="wrapper wrapper--user">
      <header class="l-header">
        <div class="l-container">
          <h1 class="logo"><img src="~assets/images/logo.png" alt="" /></h1>
        </div>
      </header>
      <main class="l-main">
        <div class="l-container">
          <h2 class="title">{{ title }}</h2>
          <div class="grid">
            <div class="grid__inner">
              <div class="grid__item">
                <button class="count" data-initial="a" @click="submit">
                  <transition name="count__num">
                    <p v-if="!countHide" class="count__num">
                      {{ panels.a.count }}
                    </p>
                  </transition>
                  <div class="count__name">
                    <p class="count__name__alphabet">A</p>
                    <p class="count__name__text js-name-a">
                      {{ panels.a.name }}
                    </p>
                  </div>
                </button>
              </div>
              <div class="grid__item">
                <button class="js-post count" data-initial="b" @click="submit">
                  <p v-if="!countHide" class="count__num">
                    {{ panels.b.count }}
                  </p>
                  <div class="count__name">
                    <p class="count__name__alphabet">B</p>
                    <p class="count__name__text js-name-b">
                      {{ panels.b.name }}
                    </p>
                  </div>
                </button>
              </div>
              <div class="grid__item">
                <button class="js-post count" data-initial="c" @click="submit">
                  <p v-if="!countHide" class="count__num">
                    {{ panels.c.count }}
                  </p>
                  <div class="count__name">
                    <p class="count__name__alphabet">C</p>
                    <p class="count__name__text js-name-c">
                      {{ panels.c.name }}
                    </p>
                  </div>
                </button>
              </div>
              <div class="grid__item">
                <button class="js-post count" data-initial="d" @click="submit">
                  <p v-if="!countHide" class="count__num">
                    {{ panels.d.count }}
                  </p>
                  <div class="count__name">
                    <p class="count__name__alphabet">D</p>
                    <p class="count__name__text js-name-d">
                      {{ panels.d.name }}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="form">
        <div class="l-container">
          <form
            id="js-form"
            name="comment-form"
            @submit.prevent="onSubmitComment"
          >
            <input
              v-model="commentText"
              type="text"
              name="comment"
              maxlength="30"
              class="form__input js-comment"
              placeholder="コメントを入力してください"
            />
            <div class="btn-wrap">
              <button ref="submit" type="submit" name="btn" class="btn">
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="view-pc">
      <p class="view-pc__text">スマホ画面で表示して下さい</p>
    </div>
    <div class="layer js-layer dn">
      <img
        class="layer__loading js-layer-loading dn"
        src="~assets/images/loading.gif"
        alt=""
      />
      <p class="layer__count-stop js-layer-count-stop dn">集計停止中</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  data() {
    return {
      TRANSITION_END: "transitionend", // 2つ指定していると2回バインドされる
      ANIMATION_END: "animationend", // 2つ指定していると2回バインドされる

      // title: mapState(["title"]),
      // panels: {
      //   a: {
      //     count: 0,
      //     name: "あああ",
      //     sound: 0,
      //   },
      //   b: {
      //     count: 0,
      //     name: "いいい",
      //     sound: 1,
      //   },
      //   c: {
      //     count: 0,
      //     name: "ううう",
      //     sound: 2,
      //   },
      //   d: {
      //     count: 0,
      //     name: "えええ",
      //     sound: 3,
      //   },
      // },
      countStop: false,
      countHide: false,
      pushComments: {},
      layer: {},
      layerLoading: {},
      layerCountStop: {},
      commentText: "",
    };
  },
  computed: {
    ...mapState(["title"]),
    ...mapState(["panels"]),
  },
  mounted() {
    // this.database = firebase.firestore();
    // this.refTitle = this.$db.collection("votingApp").doc("votingAppObj");
    // this.refCount = this.$db.collection("counts").doc("count");
    // this.refName = this.$db.collection("names").doc("name");
    // this.refComment = this.$db.collection("pushComments");
    // this.refCountStop = this.$db
    //   .collection("counterSwitcher")
    //   .doc("counterSwitch");
    // this.refView = this.$db
    //   .collection("viewCounterSwitcher")
    //   .doc("viewCounterSwitch");
    // this.title = this.$refs.title;
    // this.post = document.querySelectorAll(".js-post");
    // this.submit = this.$refs.submit;
    // this.form = document.querySelector("#js-form");
    // this.count = document.querySelectorAll(".js-count");
    // this.layer = document.querySelector(".js-layer");
    // this.layerLoading = document.querySelector(".js-layer-loading");
    // this.layerCountStop = document.querySelector(".js-layer-count-stop");
    /*
     * カウント表示/非表示判定
     */
    /*
     * 集計停止判定
     */
    /*
     * クリックイベント
     * ・アルファベット桜花
     * ・コメント送信
     * ・初期読み込み
     * ・pushイベント検知
     */
    // for (let i = 0; i < this.post.length; i++) {
    //   let el = this.post[i];
    //   el.addEventListener("click", () => {
    //     if (this.countStop) {
    //       return;
    //     }
    //     let initial = el.dataset["initial"];
    //     this.countObj[initial] = this.countObj[initial] + 1;
    //     this.postActionCount(initial, this.countObj[initial]);
    //   });
    // }
    // Nuxt移行完了までコメントアウト
    // this.form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   let commentVal = this.form.querySelector('.js-comment').value;
    //   this.postActionComment(commentVal);
    //   // データベースに送信後は値を空にする
    //   this.form.querySelectorAll('.js-comment').value;
    // });
    // this.refTitle.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   //titleObj[snapshot.key] = snapshot.val();
    //   //renderTitle(titleObj);
    //   this.defRenderTitle({
    //     id: snapshot.key,
    //     value: snapshot.val()
    //   });
    // });
    // this.refTitle.on("value", (snapshot) => {
    //   this.renderTitle(snapshot.val());
    // });
    // refName.on("child_added", (snapshot) => {
    //  // データベースと同期
    //  nameObj[snapshot.key] = snapshot.val();
    //  renderName(nameObj);
    // });
    // this.refName.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   //nameObj[snapshot.key] = snapshot.val();
    //   this.defRenderName({
    //     id: snapshot.key,
    //     value: snapshot.val()
    //   });
    // });
    // this.refName.on("value", (snapshot) => {
    //   this.renderName(snapshot.val());
    // });
    // this.refCount.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   this.countObj[snapshot.key] = snapshot.val();
    //   this.defRenderCount({
    //     id: snapshot.key,
    //     value: snapshot.val()
    //   });
    // });
    // this.refCount.on("value", (snapshot) => {
    //   let snapshotObj = snapshot.val();
    //   // データベースと同期
    //   for (let key in snapshotObj){
    //     this.countObj[key] = snapshotObj[key];
    //   }
    //   this.renderCount(snapshot.val());
    // });
    // this.refView.on("child_added", (snapshot) => {
    //   if(snapshot.val() === true) {
    //     for (let i = 0; i < this.count.length; i++) {
    //       this.count[i].classList.remove('is-hide');
    //     }
    //   } else {
    //     for (let i = 0; i < this.count.length; i++) {
    //       this.count[i].classList.add('is-hide');
    //     }
    //   }
    // });
    // this.refView.on("value", (snapshot) => {
    //   if(snapshot.val().view === true) {
    //     for (let i = 0; i < this.count.length; i++) {
    //       this.count[i].classList.remove('is-hide');
    //     }
    //   } else {
    //     for (let i = 0; i < this.count.length; i++) {
    //       this.count[i].classList.add('is-hide');
    //     }
    //   }
    // });
    // this.refCountStop.on("child_added", (snapshot) => {
    //   if(snapshot.val() === true) {
    //     this.countStop = true;
    //     this.showCountStop();
    //   } else {
    //     this.countStop = false;
    //     this.hideCountStop();
    //   }
    // });
    // this.refCountStop.on("value", (snapshot) => {
    //   if(snapshot.val().countStop === true) {
    //     this.countStop = true;
    //     this.showCountStop();
    //   } else {
    //     this.countStop = false;
    //     this.hideCountStop();
    //   }
    // });
    // for (let i = 0; i < this.post.length; i++) {
    //   let el = this.post[i];
    //   el.addEventListener(this.ANIMATION_END, () => {
    //     el.classList.remove("is-animated");
    //   });
    // }
  },
  methods: {
    // escapeHtml(string: any) {
    //   if (typeof string !== "string") {
    //     return string;
    //   }
    //   return string.replace(/[&'`"<>]/g, function (match) {
    //     return {
    //       "&": "&amp;",
    //       "'": "&#x27;",
    //       "`": "&#x60;",
    //       '"': "&quot;",
    //       "<": "&lt;",
    //       ">": "&gt;",
    //     }[match];
    //   });
    // },
    /*
     * View
     * ・タイトル表示
     * ・カウント表示
     * ・名前表示
     */

    defRenderTitle(titleObj: any) {
      // this.title.textContent = titleObj.value;
    },
    renderTitle(titleObj: any) {
      // this.title.textContent = titleObj.title;
    },
    defRenderCount(countObj: any) {
      // let $targetCountObj = $(`.js-count-${countObj.id}`);
      // $targetCountObj.text(countObj.value);
      // this.checkFontSize($targetCountObj);
    },
    renderCount(countObj: any) {
      // for (let key in countObj) {
      //   if (parseInt($(`.js-count-${key}`).text(), 10) !== countObj[key]) {
      //     let $targetCountObj = $(`.js-count-${key}`);
      //     let $targetCountObjPost = $targetCountObj.closest(".js-post");
      //     $targetCountObjPost.addClass("is-animated");
      //     $targetCountObj.text(countObj[key]);
      //     this.checkFontSize($targetCountObj);
      //   }
      // }
    },
    defRenderName(nameObj: any) {
      // $(`.js-name-${nameObj.id}`).text(nameObj.value);
    },
    renderName(nameObj: any) {
      // for (let key in nameObj) {
      //   $(`.js-name-${key}`).text(nameObj[key]);
      // }
    },
    postActionCount(initial: any, countVal: any) {
      // let arg = {};
      // arg[initial] = countVal;
      // this.show();
      // this.refCount.update(arg).then((res) => {
      //   setTimeout(() => {
      //     this.hide();
      //   }, 300);
      // });
    },
    onSubmitComment() {
      // (this as any).refComment.add({ text: (this as any).commentText });
      // (this as any).getData();
    },
    getData() {
      // (this as any).refComment.get().then((snapshot: any) => {
      //   snapshot.docs.forEach((doc: any) => {
      //     console.log(doc.data().text);
      //   });
      // });
    },

    /*
     * その他
     */
    checkFontSize(targetCountObj: any) {
      // let countTextLength = targetCountObj.text().length;
      // if (countTextLength > 3) {
      //   targetCountObj.addClass("count__num--long");
      // } else {
      //   targetCountObj.removeClass("count__num--long");
      // }
    },
    show() {
      // this.layer.classList.remove("dn");
      // this.layerLoading.classList.remove("dn");
      // this.layer.classList.add("is-show");
    },
    hide() {
      // this.layer.classList.remove("is-show");
      // setTimeout(() => {
      //   this.layerLoading.classList.add("dn");
      //   this.layer.classList.add("dn");
      // }, 600);
    },
    showCountStop() {
      // this.layer.classList.remove("dn");
      // this.layerCountStop.classList.remove("dn");
      // this.layer.classList.add("is-show");
    },
    hideCountStop() {
      // this.layer.classList.remove("is-show");
      // setTimeout(() => {
      //   this.layerCountStop.classList.add("dn");
      //   this.layer.classList.add("dn");
      // }, 600);
    },
    submit() {
      // const db = firebase.firestore();
      // let counts = this.$db.collection("counts");
      // let a = counts.doc("a");
      // a.update({
      //   count: 1000,
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
// スタイルをここに移す
</style>
