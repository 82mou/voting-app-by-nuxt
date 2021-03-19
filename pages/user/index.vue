<template>
  <div>
    <div class="wrapper wrapper--user">
      <header class="l-header">
        <div class="l-container">
          <h1 class="logo"><img src="~assets/images/logo.png" alt=""></h1>
        </div>
      </header>
      <main class="l-main">
        <div class="l-container">
          <h2 class="title" ref="title"></h2>
          <div class="grid">
            <div class="grid__inner">
              <div class="grid__item">
                <button @click="submit" class="js-post count" data-initial="a">
                  <p class="count__num js-count js-count-a is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">A</p>
                    <p class="count__name__text js-name-a"></p>
                  </div>
                </button>
              </div>
              <div class="grid__item">
                <button @click="submit" class="js-post count" data-initial="b">
                  <p class="count__num js-count js-count-b is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">B</p>
                    <p class="count__name__text js-name-b"></p>
                  </div>
                </button>
              </div>
              <div class="grid__item">
                <button @click="submit" class="js-post count" data-initial="c">
                  <p class="count__num js-count js-count-c is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">C</p>
                    <p class="count__name__text js-name-c"></p>
                  </div>
                </button>
              </div>
              <div class="grid__item">
                <button @click="submit" class="js-post count" data-initial="d">
                  <p class="count__num js-count js-count-d is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">D</p>
                    <p class="count__name__text js-name-d"></p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="form">
        <div class="l-container">
          <form name="comment-form" id="js-form">
            <input type="text" name="comment" maxlength="30" class="form__input js-comment" placeholder="コメントを入力してください">
            <div class="btn-wrap">
              <button type="submit" name="btn" class="btn" ref="submit">送信</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="view-pc">
      <p class="view-pc__text">スマホ画面で表示して下さい</p>
    </div>
    <div class="layer js-layer dn">
      <img class="layer__loading js-layer-loading dn" src="~assets/images/loading.gif" alt="">
      <p class="layer__count-stop js-layer-count-stop dn">集計停止中</p>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';

export default {
  data() {
    return {
      TRANSITION_END: 'transitionend',// 2つ指定していると2回バインドされる
      ANIMATION_END: 'animationend',// 2つ指定していると2回バインドされる

      /*
       * 初期化
       */
      database: {},
      refTitle: {},
      refCount: {},
      refName: {},
      refComment: {},
      refCountStop: {},
      refView: {},
      title: {},
      titleObj: {},
      nameObj: {},
      post: {},
      // submit: {},
      form: {},
      countObj: {},
      commentObj: {},
      counts: {
        a: '',
        b: '',
        c: '',
        d: '',
      },
      countStop: false,
      layer: {},
      layerLoading: {},
      layerCountStop: {}
    }
  },
  mounted() {
    this.database = firebase.database();
    this.refTitle = firebase.database().ref('title');
    this.refCount = firebase.database().ref('count');
    this.refName = firebase.database().ref('name');
    this.refComment = firebase.database().ref('comment');
    this.refCountStop = firebase.database().ref('countStop');
    this.refView = firebase.database().ref('view');
    this.title = this.$refs.title;
    this.post = document.querySelectorAll('.js-post');
    // this.submit = this.$refs.submit;
    this.form = document.querySelector('#js-form');
    this.count = document.querySelectorAll('.js-count');
    this.layer = document.querySelector('.js-layer');
    this.layerLoading = document.querySelector('.js-layer-loading');
    this.layerCountStop = document.querySelector('.js-layer-count-stop');
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

    for (let i = 0; i < this.post.length; i++) {
      let el = this.post[i];
      el.addEventListener('click', () => {
        if (this.countStop) {
          return;
        }
        let initial = el.dataset['initial'];
        this.countObj[initial] = this.countObj[initial] + 1;
        this.postActionCount(initial, this.countObj[initial]);
      });
    }

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let commentVal = this.form.querySelector('.js-comment').value;

      this.postActionComment(commentVal);

      // データベースに送信後は値を空にする
      this.form.querySelectorAll('.js-comment').value;
    });

    this.refTitle.on("child_added", (snapshot) => {
      // データベースと同期
      //titleObj[snapshot.key] = snapshot.val();
      //renderTitle(titleObj);
      this.defRenderTitle({
        id: snapshot.key,
        value: snapshot.val()
      });
    });

    this.refTitle.on("value", (snapshot) => {
      this.renderTitle(snapshot.val());
    });

    //refName.on("child_added", (snapshot) => {
    //  // データベースと同期
    //  nameObj[snapshot.key] = snapshot.val();
    //  renderName(nameObj);
    //});

    this.refName.on("child_added", (snapshot) => {
      // データベースと同期
      //nameObj[snapshot.key] = snapshot.val();

      this.defRenderName({
        id: snapshot.key,
        value: snapshot.val()
      });
    });

    this.refName.on("value", (snapshot) => {
      this.renderName(snapshot.val());
    });

    this.refCount.on("child_added", (snapshot) => {
      // データベースと同期
      this.countObj[snapshot.key] = snapshot.val();

      this.defRenderCount({
        id: snapshot.key,
        value: snapshot.val()
      });
    });

    this.refCount.on("value", (snapshot) => {
      let snapshotObj = snapshot.val();

      // データベースと同期
      for (let key in snapshotObj){
        this.countObj[key] = snapshotObj[key];
      }

      this.renderCount(snapshot.val());
    });

    this.refView.on("child_added", (snapshot) => {
      if(snapshot.val() === true) {
        for (let i = 0; i < this.count.length; i++) {
          this.count[i].classList.remove('is-hide');
        }
      } else {
        for (let i = 0; i < this.count.length; i++) {
          this.count[i].classList.add('is-hide');
        }
      }
    });

    this.refView.on("value", (snapshot) => {
      if(snapshot.val().view === true) {
        for (let i = 0; i < this.count.length; i++) {
          this.count[i].classList.remove('is-hide');
        }
      } else {
        for (let i = 0; i < this.count.length; i++) {
          this.count[i].classList.add('is-hide');
        }
      }
    });

    this.refCountStop.on("child_added", (snapshot) => {
      if(snapshot.val() === true) {
        this.countStop = true;
        this.showCountStop();
      } else {
        this.countStop = false;
        this.hideCountStop();
      }
    });

    this.refCountStop.on("value", (snapshot) => {
      if(snapshot.val().countStop === true) {
        this.countStop = true;
        this.showCountStop();
      } else {
        this.countStop = false;
        this.hideCountStop();
      }
    });

    for (let i = 0; i < this.post.length; i++) {
      let el = this.post[i];
      el.addEventListener(this.ANIMATION_END, () => {
        el.classList.remove('is-animated');
      });
    }
  },
  methods: {
    /*
     * View
     * ・タイトル表示
     * ・カウント表示
     * ・名前表示
     */

    defRenderTitle(titleObj) {
      this.title.textContent = titleObj.value;
    },
    renderTitle(titleObj) {
      this.title.textContent = titleObj.title;
    },
    defRenderCount(countObj) {
      let $targetCountObj = $(`.js-count-${countObj.id}`);

      $targetCountObj.text(countObj.value);
      this.checkFontSize($targetCountObj);
    },
    renderCount(countObj) {
      for (let key in countObj){
        if(parseInt($(`.js-count-${key}`).text(), 10) !== countObj[key]) {
          let $targetCountObj = $(`.js-count-${key}`);
          let $targetCountObjPost = $targetCountObj.closest('.js-post');

          $targetCountObjPost.addClass('is-animated');
          $targetCountObj.text(countObj[key]);
          this.checkFontSize($targetCountObj);
        }
      }
    },
    defRenderName(nameObj) {
      $(`.js-name-${nameObj.id}`).text(nameObj.value);
    },
    renderName(nameObj) {
      for (let key in nameObj){
        $(`.js-name-${key}`).text(nameObj[key]);
      }
    },
    postActionCount(initial, countVal) {
      let arg = {};
      arg[initial] = countVal;
      this.show();
      this.refCount.update(arg)
        .then((res)=>{
          setTimeout(() => {
            this.hide();
          }, 300);
        });
    },
    postActionComment(commentVal) {
      let arg = {};
      arg['comment'] = commentVal;

      this.refComment.push(arg)
        .then((res)=>{
          //console.log(res);
        });
    },

    /*
     * その他
     */
    checkFontSize(targetCountObj) {
      let countTextLength = targetCountObj.text().length;
      if(countTextLength > 3) {
        targetCountObj.addClass('count__num--long');
      } else {
        targetCountObj.removeClass('count__num--long');
      }
    },
    show() {
      this.layer.classList.remove('dn');
      this.layerLoading.classList.remove('dn');
      this.layer.classList.add('is-show');
    },
    hide() {
      this.layer.classList.remove('is-show');

      setTimeout(() => {
        this.layerLoading.classList.add('dn');
        this.layer.classList.add('dn');
      }, 600);
    },
    showCountStop() {
      this.layer.classList.remove('dn');
      this.layerCountStop.classList.remove('dn');
      this.layer.classList.add('is-show');
    },
    hideCountStop() {
      this.layer.classList.remove('is-show');

      setTimeout(() => {
        this.layerCountStop.classList.add('dn');
        this.layer.classList.add('dn');
      }, 600);
    },
    submit() {
      const db = firebase.firestore();
      let counts = db.collection('counts');
      let a = counts.doc('a');
      a
       .update({
         count: 1000,
       })
    }
  }
}
</script>
