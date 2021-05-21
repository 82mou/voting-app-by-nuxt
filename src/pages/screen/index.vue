<template>
  <div>
    <div class="wrapper">
      <header class="l-header">
        <div class="l-container">
          <p class="logo screen-logo">
            <img src="~assets/images/logo.png" alt="" />
          </p>
          <h1 class="screen-title">{{ title }}</h1>
        </div>
      </header>
      <main class="l-main">
        <div class="l-container">
          <div class="grid">
            <div class="grid__inner">
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">A</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text">
                      {{ panels.a.name }}
                    </p>
                  </div>
                  <transition name="screen-count__num">
                    <p v-if="countShow" class="screen-count__num">
                      {{ panels.a.count }}
                    </p>
                  </transition>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">B</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text">
                      {{ panels.b.name }}
                    </p>
                  </div>
                  <transition name="screen-count__num">
                    <p v-if="countShow" class="screen-count__num">
                      {{ panels.b.count }}
                    </p>
                  </transition>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">C</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text">
                      {{ panels.c.name }}
                    </p>
                  </div>
                  <transition name="screen-count__num">
                    <p v-if="countShow" class="screen-count__num">
                      {{ panels.c.count }}
                    </p>
                  </transition>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">D</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text">
                      {{ panels.d.name }}
                    </p>
                  </div>
                  <transition name="screen-count__num">
                    <p v-if="countShow" class="screen-count__num">
                      {{ panels.d.count }}
                    </p>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <p class="push-comment">
            <span class="push-comment-text js-push-comment-text">{{
              renderComment
            }}</span>
          </p>
        </div>
      </main>
    </div>
    <transition name="layer">
      <div v-if="countStop" class="layer">
        <p class="layer__count-stop layer__count-stop--screen">集計停止中</p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState(["title"]),
    ...mapState(["panels"]),
    ...mapState(["countShow"]),
    ...mapState(["countStop"]),
    ...mapState(["renderComment"]),
  },
  created() {
    // this.$store.dispatch("changeTitle");
    // this.$store.dispatch("changePanels");
    // this.$store.dispatch("changeRenderComment");
  },
  mounted() {
    this.$store.dispatch("changeTitle");
    this.$store.dispatch("changePanels");
    this.$store.dispatch("changeRenderComment");
    // this.$store.dispatch("changeTitle");
    // this.$store.dispatch("changePanels");
    // const TRANSITION_END = "transitionend"; // 2つ指定していると2回バインドされる
    // const ANIMATION_END = "animationend"; // 2つ指定していると2回バインドされる
    /*
     * 初期化
     */
    // const refCount = database.ref("count");
    // const refName = database.ref("name");
    // const refSound = database.ref("sound");
    // const refPushComment = database.ref("pushComment");
    // const refView = database.ref("view");
    // const refCountStop = database.ref("countStop");
    // const $titleForm = $("#js-title-form");
    // const $title = $(".js-title");
    // const titleObj = {};
    // const nameObj = {};
    // const $post = $(".js-post");
    // const $pushComment = $(".js-push-comment-text");
    // const pushCommentObj = {};
    // const countObj = {};
    // const $count = $(".js-count");
    // let countStop = false;
    // const $layer = $(".js-layer");
    // const $layerCountStop = $(".js-layer-count-stop");
    // let silentA = false;
    // let silentB = false;
    // let silentC = false;
    // let silentD = false;
    /*
     * View
     * ・タイトル表示
     * ・カウント表示
     * ・名前表示
     * ・サウンド設定
     * ・コメント表示
     */
    // const defRenderTitle = (titleObj) => {
    //   $title.text(titleObj.value);
    // };
    // const renderTitle = (titleObj) => {
    //   $title.text(titleObj.title);
    // };
    // const defRenderCount = (countObj) => {
    //   $(`.js-count-${countObj.id}`).text(countObj.value);
    // };
    // const renderCount = (countObj) => {
    //   for (const key in countObj) {
    //     if (parseInt($(`.js-count-${key}`).text(), 10) !== countObj[key]) {
    //       $(`.js-count-${key}`).text(countObj[key]);
    //       const $targetCountObjPost = $(`.js-count-${key}`).closest(".js-post");
    //       $targetCountObjPost.addClass("is-animated");
    //       if (key === "a") {
    //         if (silentA === true) {
    //           return;
    //         }
    //         playSound(soundListA);
    //       } else if (key === "b") {
    //         if (silentB === true) {
    //           return;
    //         }
    //         playSound(soundListB);
    //       } else if (key === "c") {
    //         if (silentC === true) {
    //           return;
    //         }
    //         playSound(soundListC);
    //       } else if (key === "d") {
    //         if (silentD === true) {
    //           return;
    //         }
    //         playSound(soundListD);
    //       }
    //     }
    //   }
    // };
    // const defRenderName = (nameObj) => {
    //   $(`.js-name-${nameObj.id}`).text(nameObj.value);
    // };
    // const renderName = (nameObj) => {
    //   for (const key in nameObj) {
    //     $(`.js-name-${key}`).text(nameObj[key]);
    //   }
    // };
    // const defSound = (soundObj) => {
    //   if (soundObj.id === "soundA") {
    //     if (soundObj.value === "") {
    //       silentA = true;
    //     } else {
    //       silentA = false;
    //       soundListA = soundList[soundObj.value];
    //     }
    //   } else if (soundObj.id === "soundB") {
    //     if (soundObj.value === "") {
    //       silentB = true;
    //     } else {
    //       silentB = false;
    //       soundListB = soundList[soundObj.value];
    //     }
    //   } else if (soundObj.id === "soundC") {
    //     if (soundObj.value === "") {
    //       silentC = true;
    //     } else {
    //       silentC = false;
    //       soundListC = soundList[soundObj.value];
    //     }
    //   } else if (soundObj.id === "soundD") {
    //     if (soundObj.value === "") {
    //       silentD = true;
    //     } else {
    //       silentD = false;
    //       soundListD = soundList[soundObj.value];
    //     }
    //   }
    // };
    // const sound = (soundObj) => {
    //   for (const key in soundObj) {
    //     if (key === "soundA") {
    //       if (soundObj[key] === "") {
    //         silentA = true;
    //       } else {
    //         silentA = false;
    //         soundListA = soundList[soundObj[key]];
    //       }
    //     } else if (key === "soundB") {
    //       if (soundObj[key] === "") {
    //         silentB = true;
    //       } else {
    //         silentB = false;
    //         soundListB = soundList[soundObj[key]];
    //       }
    //     } else if (key === "soundC") {
    //       if (soundObj[key] === "") {
    //         silentC = true;
    //       } else {
    //         silentC = false;
    //         soundListC = soundList[soundObj[key]];
    //       }
    //     } else if (key === "soundD") {
    //       if (soundObj[key] === "") {
    //         silentD = true;
    //       } else {
    //         silentD = false;
    //         soundListD = soundList[soundObj[key]];
    //       }
    //     }
    //   }
    // };
    // const defRenderPushComment = (pushCommentObj) => {
    //   $pushComment.text(pushCommentObj.value);
    //   setTimeout(() => {
    //     $pushComment.addClass("is-animate");
    //   });
    // };
    // const renderPushComment = (pushCommentObj) => {
    //   $pushComment.text(pushCommentObj.pushComment);
    //   setTimeout(() => {
    //     $pushComment.addClass("is-animate");
    //   });
    // };
    /*
     * サウンド
     */
    // let ctx,
    //   soundList,
    //   soundListA,
    //   soundListB,
    //   soundListC,
    //   soundListD,
    //   loadSound,
    //   playSound;
    // loadSound = function (sound) {
    //   let xml;
    //   xml = new XMLHttpRequest();
    //   xml.responseType = "arraybuffer";
    //   xml.open("GET", sound.url, true);
    //   xml.onload = function () {
    //     ctx.decodeAudioData(
    //       xml.response,
    //       function (data) {
    //         sound.data = data;
    //       },
    //       function (e) {
    //         // alert(e.err);
    //       }
    //     );
    //   };
    //   xml.send();
    // };
    // playSound = function (sound) {
    //   let bufferSource;
    //   if (!sound.data) {
    //     return;
    //   }
    //   bufferSource = ctx.createBufferSource();
    //   bufferSource.buffer = sound.data;
    //   bufferSource.connect(ctx.destination);
    //   bufferSource.start(0);
    // };
    // window.AudioContext = window.AudioContext || window.webkitAudioContext;
    // ctx = new AudioContext();
    // soundList = [
    //   {
    //     url:
    //       "https://lig824.github.io/event/public/assets/lib/media/decision13.mp3",
    //     data: null,
    //   },
    //   {
    //     url:
    //       "https://lig824.github.io/event/public/assets/lib/media/clearing1.mp3",
    //     data: null,
    //   },
    //   {
    //     url: "https://lig824.github.io/event/public/assets/lib/media/tin1.mp3",
    //     data: null,
    //   },
    //   {
    //     url:
    //       "https://lig824.github.io/event/public/assets/lib/media/decision12.mp3",
    //     data: null,
    //   },
    // ];
    // soundList.forEach(loadSound);
    /*
     * カウント表示/非表示判定
     */
    /*
     * クリックイベント
     * ・初期読み込み
     * ・pushイベント検知
     */
    // refTitle.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   // titleObj[snapshot.key] = snapshot.val();
    //   // renderTitle(titleObj);
    //   defRenderTitle({
    //     id: snapshot.key,
    //     value: snapshot.val(),
    //   });
    // });
    // refTitle.on("value", (snapshot) => {
    //   renderTitle(snapshot.val());
    // });
    // refName.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   // nameObj[snapshot.key] = snapshot.val();
    //   defRenderName({
    //     id: snapshot.key,
    //     value: snapshot.val(),
    //   });
    // });
    // refName.on("value", (snapshot) => {
    //   renderName(snapshot.val());
    // });
    // refCount.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   // countObj[snapshot.key] = snapshot.val();
    //   defRenderCount({
    //     id: snapshot.key,
    //     value: snapshot.val(),
    //   });
    // });
    // refCount.on("value", (snapshot) => {
    //   renderCount(snapshot.val());
    // });
    // refSound.on("child_added", (snapshot) => {
    //   defSound({
    //     id: snapshot.key,
    //     value: snapshot.val(),
    //   });
    // });
    // refSound.on("value", (snapshot) => {
    //   sound(snapshot.val());
    // });
    // refPushComment.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   // pushCommentObj[snapshot.key] = snapshot.val();
    //   // DBのテキストが空だったら何もしない
    //   if (snapshot.val() === "") {
    //     return;
    //   }
    //   defRenderPushComment({
    //     id: snapshot.key,
    //     value: snapshot.val(),
    //   });
    // });
    // refPushComment.on("value", (snapshot) => {
    //   // DBのテキストが空だったら何もしない
    //   if (snapshot.val().pushComment === "") {
    //     return;
    //   }
    //   renderPushComment(snapshot.val());
    // });
    // refView.on("child_added", (snapshot) => {
    //   if (snapshot.val() === true) {
    //     $count.removeClass("is-hide");
    //   } else {
    //     $count.addClass("is-hide");
    //   }
    // });
    // refView.on("value", (snapshot) => {
    //   if (snapshot.val().view === true) {
    //     $count.removeClass("is-hide");
    //   } else {
    //     $count.addClass("is-hide");
    //   }
    // });
    // refCountStop.on("child_added", (snapshot) => {
    //   if (snapshot.val() === true) {
    //     countStop = true;
    //     showCountStop();
    //   } else {
    //     countStop = false;
    //     hideCountStop();
    //   }
    // });
    // refCountStop.on("value", (snapshot) => {
    //   if (snapshot.val().countStop === true) {
    //     countStop = true;
    //     showCountStop();
    //   } else {
    //     countStop = false;
    //     hideCountStop();
    //   }
    // });
    // $pushComment.on("animationend", (e) => {
    //   $pushComment.text("");
    //   refPushComment.update({
    //     pushComment: "",
    //   });
    //   $(e.currentTarget).removeClass("is-animate");
    // });
    // /*
    //  * その他
    //  */
    // const showCountStop = () => {
    //   $layer.removeClass("dn");
    //   $layerCountStop.removeClass("dn");
    //   $layer.addClass("is-show");
    // };
    // const hideCountStop = () => {
    //   $layer.removeClass("is-show").one(TRANSITION_END, () => {
    //     $layerCountStop.addClass("dn");
    //     $layer.addClass("dn");
    //   });
    // };
    // $post.on(ANIMATION_END, (e) => {
    //   $(e.currentTarget).removeClass("is-animated");
    // });
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
</style>
