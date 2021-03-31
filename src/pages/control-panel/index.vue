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
                    <button
                      type="submit"
                      name="btn"
                      class="btn btn-primary ml-3 js-submit-title"
                    >
                      送信
                    </button>
                  </div>
                </form>
              </div>
              <div class="form-group">
                <form
                  name="name-form-a"
                  @submit.prevent="onSubmitPanelName('a', panelNameA)"
                >
                  <div class="input-group">
                    <span class="input-group-addon">A</span>
                    <input
                      v-model="panelNameA"
                      type="text"
                      name="name-a"
                      class="form-control"
                    />
                    <button
                      type="submit"
                      name="submit-name-a"
                      class="btn btn-primary ml-3 js-submit-name-a"
                    >
                      送信
                    </button>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-3 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="0"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="1"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="2"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="a-sound"
                          data-alphabet="A"
                          value="3"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">無音</span>
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
                <form
                  name="name-form-b"
                  @submit.prevent="onSubmitPanelName('b', panelNameB)"
                >
                  <div class="input-group">
                    <span class="input-group-addon">B</span>
                    <input
                      v-model="panelNameB"
                      type="text"
                      name="name-b"
                      class="form-control"
                    />
                    <button
                      type="submit"
                      name="submit-name-b"
                      class="btn btn-primary ml-3 js-submit-name-b"
                    >
                      送信
                    </button>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-3 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="0"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="1"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="2"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="b-sound"
                          data-alphabet="B"
                          value="3"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">無音</span>
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
                <form
                  name="name-form-c"
                  @submit.prevent="onSubmitPanelName('c', panelNameC)"
                >
                  <div class="input-group">
                    <span class="input-group-addon">C</span>
                    <input
                      v-model="panelNameC"
                      type="text"
                      name="name-c"
                      class="form-control"
                    />
                    <button
                      type="submit"
                      name="submit-name-c"
                      class="btn btn-primary ml-3 js-submit-name-c"
                    >
                      送信
                    </button>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-3 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="0"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="1"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="2"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="c-sound"
                          data-alphabet="C"
                          value="3"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">無音</span>
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
                <form
                  name="name-form-d"
                  @submit.prevent="onSubmitPanelName('d', panelNameD)"
                >
                  <div class="input-group">
                    <span class="input-group-addon">D</span>
                    <input
                      v-model="panelNameD"
                      type="text"
                      name="name-d"
                      class="form-control"
                    />
                    <button
                      type="submit"
                      name="submit-name-d"
                      class="btn btn-primary ml-3 js-submit-name-d"
                    >
                      送信
                    </button>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-3 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音1</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="0"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音2</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="1"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音3</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="2"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">音4</span>
                        <input
                          class="form-check-input sound-checkbox ml-0 js-sound"
                          type="radio"
                          name="d-sound"
                          data-alphabet="D"
                          value="3"
                        />
                      </label>
                    </div>
                    <div
                      class="form-check sound-text-box text-center mb-0 pl-2 pr-2"
                    >
                      <label class="form-check-label sound-text-label pl-0">
                        <span class="sound-text mb-0">無音</span>
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
              <button
                type="submit"
                class="btn btn-outline-danger"
                @click="clearTitle"
              >
                入力クリア
              </button>
            </div>
          </div>
          <div class="col-4">
            <div class="border p-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    id="js-count-view-switch"
                    class="form-check-input"
                    type="checkbox"
                    value="option1"
                  />統計数表示
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    id="js-count-switch"
                    class="form-check-input"
                    type="checkbox"
                    value="option2"
                  />集計停止
                </label>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-danger js-btn-all-clear">
                  オールクリア
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="border mt-5 p-4">
          <div class="comment-pool__headline">
            <h3>Comment</h3>
            <button
              type="submit"
              class="btn btn-outline-danger js-btn-comment-clear"
            >
              コメントクリア
            </button>
          </div>
          <ul class="comment-pool js-comment-pool"></ul>
          <form id="js-push-comment-form" name="comment-form">
            <div class="form-group mt-3">
              <div class="input-group">
                <input
                  type="text"
                  name="comment"
                  maxlength="30"
                  class="form-controlomment"
                  placeholder="コメント入力MAX30文字"
                />
                <button
                  type="submit"
                  name="btn"
                  class="btn btn-primary ml-3 js-push-comment-submit"
                >
                  送信
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  data() {
    return {
      title: "",
      panelNameA: "",
      panelNameB: "",
      panelNameC: "",
      panelNameD: "",
    };
  },
  computed: {
    ...mapState(["comments"]),
  },
  mounted() {
    /*
     * 初期化
     */
    // const database = firebase.database();
    // const refComment = database.ref("comment");
    // const refTitle = database.ref("title");
    // const refCount = database.ref("count");
    // const refName = database.ref("name");
    // const refSound = database.ref("sound");
    // const refPushComment = database.ref("pushComment");
    // const refCountStop = database.ref("countStop");
    // const refView = database.ref("view");
    // const $titleForm = $("#js-title-form");
    // const $title = $(".js-title");
    // const $submitTitle = $(".js-submit-title");
    // let title;
    // const $nameFormA = $("#js-name-form-a");
    // const $nameA = $(".js-name-a");
    // const $submitNameA = $(".js-submit-name-a");
    // let nameA;
    // const $nameFormB = $("#js-name-form-b");
    // const $nameB = $(".js-name-b");
    // const $submitNameB = $(".js-submit-name-b");
    // let nameB;
    // const $nameFormC = $("#js-name-form-c");
    // const $nameC = $(".js-name-c");
    // const $submitNameC = $(".js-submit-name-c");
    // let nameC;
    // const $nameFormD = $("#js-name-form-d");
    // const $nameD = $(".js-name-d");
    // const $submitNameD = $(".js-submit-name-d");
    // let nameD;
    // const $commentPool = $(".js-comment-pool");
    // const commentObj = {};
    // const commentKey = 0;
    // const $pushCommentForm = $("#js-push-comment-form");
    // const $pushComment = $(".js-push-comment");
    // const $pushCommentSubmit = $(".js-push-comment-submit");
    // let pushComment;
    // const $countViewSwitch = $("#js-count-view-switch");
    // const $countSwitch = $("#js-count-switch");
    // const $btnClear = $(".js-btn-clear");
    // const $btnAllClear = $(".js-btn-all-clear");
    // const $btnCommentClear = $(".js-btn-comment-clear");
    // const $sound = $(".js-sound");
    /*
     * View
     * コメントプール表示
     * エスケープ関数
     * ・サウンド設定
     */
    // const defSound = (soundObj) => {
    //   if (soundObj.id === "soundA") {
    //     $("#js-name-form-a")
    //       .find(".js-sound")
    //       .each(function () {
    //         if (soundObj.value === "") {
    //           $(this).prop("checked", true);
    //         } else if (parseInt($(this).val(), 10) == soundObj.value) {
    //           $(this).prop("checked", true);
    //         }
    //       });
    //   } else if (soundObj.id === "soundB") {
    //     $("#js-name-form-b")
    //       .find(".js-sound")
    //       .each(function () {
    //         if (soundObj.value === "") {
    //           $(this).prop("checked", true);
    //         } else if (parseInt($(this).val(), 10) == soundObj.value) {
    //           $(this).prop("checked", true);
    //         }
    //       });
    //   } else if (soundObj.id === "soundC") {
    //     $("#js-name-form-c")
    //       .find(".js-sound")
    //       .each(function () {
    //         if (soundObj.value === "") {
    //           $(this).prop("checked", true);
    //         } else if (parseInt($(this).val(), 10) == soundObj.value) {
    //           $(this).prop("checked", true);
    //         }
    //       });
    //   } else if (soundObj.id === "soundD") {
    //     $("#js-name-form-d")
    //       .find(".js-sound")
    //       .each(function () {
    //         if (soundObj.value === "") {
    //           $(this).prop("checked", true);
    //         } else if (parseInt($(this).val(), 10) == soundObj.value) {
    //           $(this).prop("checked", true);
    //         }
    //       });
    //   }
    // };
    // const sound = (soundObj) => {
    //   for (const key in soundObj) {
    //     if (key === "soundA") {
    //       $("#js-name-form-a")
    //         .find(".js-sound")
    //         .each(function () {
    //           if (soundObj[key] === "") {
    //             $(this).prop("checked", true);
    //           } else if (parseInt($(this).val(), 10) == soundObj[key]) {
    //             $(this).prop("checked", true);
    //           }
    //         });
    //     } else if (key === "soundB") {
    //       $("#js-name-form-b")
    //         .find(".js-sound")
    //         .each(function () {
    //           if (soundObj[key] === "") {
    //             $(this).prop("checked", true);
    //           } else if (parseInt($(this).val(), 10) == soundObj[key]) {
    //             $(this).prop("checked", true);
    //           }
    //         });
    //     } else if (key === "soundC") {
    //       $("#js-name-form-c")
    //         .find(".js-sound")
    //         .each(function () {
    //           if (soundObj[key] === "") {
    //             $(this).prop("checked", true);
    //           } else if (parseInt($(this).val(), 10) == soundObj[key]) {
    //             $(this).prop("checked", true);
    //           }
    //         });
    //     } else if (key === "soundD") {
    //       $("#js-name-form-d")
    //         .find(".js-sound")
    //         .each(function () {
    //           if (soundObj[key] === "") {
    //             $(this).prop("checked", true);
    //           } else if (parseInt($(this).val(), 10) == soundObj[key]) {
    //             $(this).prop("checked", true);
    //           }
    //         });
    //     }
    //   }
    // };
    // const defRenderComment = (commentObj) => {
    //   $commentPool.append(
    //     `<li><p class="comment-pool__text">${escapeHtml(
    //       commentObj.value.comment
    //     )}</p><button type="button" class="btn btn-outline-primary comment-pool-btn js-comment-pool-btn" value="${
    //       commentObj.value.comment
    //     }">入力</button></li>`
    //   );
    // };
    // const renderComment = (commentObj) => {
    //   // 一旦全てを初期化
    //   $commentPool.empty();
    //   for (const key in commentObj) {
    //     $commentPool.append(
    //       `<li><p class="comment-pool__text">${escapeHtml(
    //         commentObj[key].comment
    //       )}</p><button type="button" class="btn btn-outline-primary comment-pool-btn js-comment-pool-btn" value="${
    //         commentObj[key].comment
    //       }">入力</button></li>`
    //     );
    //   }
    // };
    // const escapeHtml = (string) => {
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
    // };
    /*
     * Changeイベント
     * ・集計停止
     * ・投票数表示
     */
    /*
     * クリックイベント
     * ・タイトル送信
     * ・名前送信
     * ・入力クリア
     * ・オールリセット
     * ・コメント送信
     * ・初期読み込み
     * ・pushイベント検知
     */
    // $titleForm.on("submit", (e) => {
    //   console.log("hoge");
    //   e.preventDefault();
    //   title = $title.val();
    //   refTitle
    //     .update({
    //       title,
    //     })
    //     .then((res) => {
    //       // console.log(res);
    //     });
    // });
    // $nameFormA.on("submit", (e) => {
    //   e.preventDefault();
    //   nameA = $nameA.val();
    //   refName
    //     .update({
    //       a: nameA,
    //     })
    //     .then((res) => {
    //       // console.log(res);
    //     });
    // });
    // $nameFormB.on("submit", (e) => {
    //   e.preventDefault();
    //   nameB = $nameB.val();
    //   refName
    //     .update({
    //       b: nameB,
    //     })
    //     .then((res) => {
    //       // console.log(res);
    //     });
    // });
    // $nameFormC.on("submit", (e) => {
    //   e.preventDefault();
    //   nameC = $nameC.val();
    //   refName
    //     .update({
    //       c: nameC,
    //     })
    //     .then((res) => {
    //       // console.log(res);
    //     });
    // });
    // $nameFormD.on("submit", (e) => {
    //   e.preventDefault();
    //   nameD = $nameD.val();
    //   refName
    //     .update({
    //       d: nameD,
    //     })
    //     .then((res) => {
    //       // console.log(res);
    //     });
    // });
    // $sound.on("change", (e) => {
    //   if ($(e.currentTarget).prop("checked") === false) {
    //     return;
    //   }
    //   const alphabet = $(e.currentTarget).data("alphabet");
    //   const value = $(e.currentTarget).val();
    //   const arg = {};
    //   arg[`sound${alphabet}`] = value;
    //   refSound.update(arg).then((res) => {
    //     // console.log(res);
    //   });
    // });
    // $btnClear.on("click", () => {
    //   $title.val("");
    //   $nameA.val("");
    //   $nameB.val("");
    //   $nameC.val("");
    //   $nameD.val("");
    //   refSound.update({
    //     soundA: 0,
    //     soundB: 1,
    //     soundC: 2,
    //     soundD: 3,
    //   });
    // });
    // $btnAllClear.on("click", () => {
    //   refTitle.update({
    //     title: "",
    //   });
    //   $title.val("");
    //   refName.update({
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //   });
    //   $nameA.val("");
    //   $nameB.val("");
    //   $nameC.val("");
    //   $nameD.val("");
    //   refSound.update({
    //     soundA: 0,
    //     soundB: 1,
    //     soundC: 2,
    //     soundD: 3,
    //   });
    //   refCount.update({
    //     a: 0,
    //     b: 0,
    //     c: 0,
    //     d: 0,
    //   });
    //   refComment.set(null);
    //   refPushComment.update({
    //     pushComment: "",
    //   });
    //   $pushComment.val("");
    //   refCountStop.update({
    //     countStop: false,
    //   });
    //   $countSwitch.prop("checked", false);
    //   refView.update({
    //     view: false,
    //   });
    //   $countViewSwitch.prop("checked", false);
    // });
    // $btnCommentClear.on("click", () => {
    //   refComment.set(null);
    //   refPushComment.update({
    //     pushComment: "",
    //   });
    //   $pushComment.val("");
    // });
    // $countViewSwitch.on("change", (e) => {
    //   if ($(e.currentTarget).prop("checked") === true) {
    //     refView
    //       .update({
    //         view: true,
    //       })
    //       .then((res) => {
    //         // console.log(res);
    //       });
    //   } else {
    //     refView
    //       .update({
    //         view: false,
    //       })
    //       .then((res) => {
    //         // console.log(res);
    //       });
    //   }
    // });
    // $countSwitch.on("change", (e) => {
    //   if ($(e.currentTarget).prop("checked") === true) {
    //     refCountStop
    //       .update({
    //         countStop: true,
    //       })
    //       .then((res) => {
    //         // console.log(res);
    //       });
    //   } else {
    //     refCountStop
    //       .update({
    //         countStop: false,
    //       })
    //       .then((res) => {
    //         // console.log(res);
    //       });
    //   }
    // });
    // $pushCommentForm.on("submit", (e) => {
    //   e.preventDefault();
    //   // pushComment = escapeHtml($pushComment.val());
    //   refPushComment
    //     .update({
    //       pushComment: $pushComment.val(),
    //     })
    //     .then((res) => {
    //       // console.log(res);
    //     });
    // });
    // $(document).on("click", ".js-comment-pool-btn", (e) => {
    //   $pushComment.val($(e.currentTarget).val());
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
    // refComment.on("child_added", (snapshot) => {
    //   // データベースと同期
    //   // commentObj[snapshot.key] = snapshot.val();
    //   defRenderComment({
    //     id: snapshot.key,
    //     value: snapshot.val(),
    //   });
    // });
    // refComment.on("value", (snapshot) => {
    //   renderComment(snapshot.val());
    // });
    // refView.on("child_added", (snapshot) => {
    //   if (snapshot.val() === true) {
    //     $countViewSwitch.prop("checked", true);
    //   }
    // });
    // refView.on("value", (snapshot) => {
    //   if (snapshot.val().countStop === true) {
    //     $countViewSwitch.prop("checked", true);
    //   }
    // });
    // refCountStop.on("child_added", (snapshot) => {
    //   if (snapshot.val() === true) {
    //     $countSwitch.prop("checked", true);
    //   }
    // });
    // refCountStop.on("value", (snapshot) => {
    //   if (snapshot.val().countStop === true) {
    //     $countSwitch.prop("checked", true);
    //   }
    // });
  },
  methods: {
    onSubmitTitle() {
      this.$store.dispatch("changeTitleDb", this.title);
    },
    onSubmitPanelName(panelId: any, panelName: any) {
      this.$store.dispatch("changePanelNameDb", { panelId, panelName });
    },
    clearTitle() {
      this.title = "";
      this.panelNameA = "";
      this.panelNameB = "";
      this.panelNameC = "";
      this.panelNameD = "";
    },
  },
});
</script>

<style lang="scss" scoped>
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
