<template>
  <div>
    <div class="wrapper wrapper--user">
      <header class="l-header">
        <div class="l-container">
          <h1 class="logo"><img src="assets/images/logo.png" alt=""></h1>
        </div>
      </header>
      <main class="l-main">
        <div class="l-container">
          <h2 class="title js-title"></h2>
          <div class="grid">
            <div class="grid__inner">
              <div class="grid__item">
                <div class="js-post count" data-initial="a">
                  <p class="count__num js-count js-count-a is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">A</p>
                    <p class="count__name__text js-name-a"></p>
                  </div>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count" data-initial="b">
                  <p class="count__num js-count js-count-b is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">B</p>
                    <p class="count__name__text js-name-b"></p>
                  </div>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count" data-initial="c">
                  <p class="count__num js-count js-count-c is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">C</p>
                    <p class="count__name__text js-name-c"></p>
                  </div>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count" data-initial="d">
                  <p class="count__num js-count js-count-d is-hide"></p>
                  <div class="count__name">
                    <p class="count__name__alphabet">D</p>
                    <p class="count__name__text js-name-d"></p>
                  </div>
                </div>
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
              <button type="submit" name="btn" class="btn js-submit">送信</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="view-pc">
      <p class="view-pc__text">スマホ画面で表示して下さい</p>
    </div>
    <div class="layer js-layer dn">
      <img class="layer__loading js-layer-loading dn" src="assets/images/loading.gif" alt="">
      <p class="layer__count-stop js-layer-count-stop dn">集計停止中</p>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    const TRANSITION_END = 'transitionend';// 2つ指定していると2回バインドされる
    const ANIMATION_END = 'animationend';// 2つ指定していると2回バインドされる

    /*
     * 初期化
     */
    let database = firebase.database();
    let refTitle = database.ref('title');
    let refCount = database.ref('count');
    let refName = database.ref('name');
    let refComment = database.ref('comment');
    let refCountStop = database.ref('countStop');
    let refView = database.ref('view');
    let $title = $('.js-title');
    let titleObj = {};
    let nameObj = {};
    let $post = $('.js-post');
    let $submit = $('.js-submit');
    let $form = $('#js-form');
    let countObj = {};
    let commentObj = {};

    let $count = $('.js-count');

    let countStop = false;

    let $layer = $('.js-layer');
    let $layerLoading = $('.js-layer-loading');
    let $layerCountStop = $('.js-layer-count-stop');

    /*
     * View
     * ・タイトル表示
     * ・カウント表示
     * ・名前表示
     */

    let defRenderTitle = (titleObj) => {
      $title.text(titleObj.value);
    };

    let renderTitle = (titleObj) => {
      $title.text(titleObj.title);
    };

    let defRenderCount = (countObj) => {
      let $targetCountObj = $(`.js-count-${countObj.id}`);

      $targetCountObj.text(countObj.value);
      checkFontSize($targetCountObj);
    };

    let renderCount = (countObj) => {
      for (let key in countObj){
        if(parseInt($(`.js-count-${key}`).text(), 10) !== countObj[key]) {
          let $targetCountObj = $(`.js-count-${key}`);
          let $targetCountObjPost = $targetCountObj.closest('.js-post');

          $targetCountObjPost.addClass('is-animated');
          $targetCountObj.text(countObj[key]);
          checkFontSize($targetCountObj);
        }
      }
    };

    let defRenderName = (nameObj) => {
      $(`.js-name-${nameObj.id}`).text(nameObj.value);
    };

    let renderName = (nameObj) => {
      for (let key in nameObj){
        $(`.js-name-${key}`).text(nameObj[key]);
      }
    };

    let postActionCount = (initial, countVal) => {
      let arg = {};
      arg[initial] = countVal;
      show();
      refCount.update(arg)
        .then((res)=>{
          setTimeout(() => {
            hide();
          }, 300);
        });
    };

    let postActionComment = (commentVal) => {
      let arg = {};
      arg['comment'] = commentVal;

      refComment.push(arg)
        .then((res)=>{
          //console.log(res);
        });
    };

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
    $post.on('click', (e) => {
      if (countStop) {
        return;
      }
      let initial = $(e.currentTarget).data('initial');
      countObj[initial] = countObj[initial] + 1;
      postActionCount(initial, countObj[initial]);
    });

    $form.on('submit', (e) => {
      e.preventDefault();
      let commentVal = $(e.currentTarget).find('.js-comment').val();

      postActionComment(commentVal);

      // データベースに送信後は値を空にする
      $(e.currentTarget).find('.js-comment').val('');
    });

    refTitle.on("child_added", (snapshot) => {
      // データベースと同期
      //titleObj[snapshot.key] = snapshot.val();
      //renderTitle(titleObj);
      defRenderTitle({
        id: snapshot.key,
        value: snapshot.val()
      });
    });

    refTitle.on("value", (snapshot) => {
      renderTitle(snapshot.val());
    });

//refName.on("child_added", (snapshot) => {
//  // データベースと同期
//  nameObj[snapshot.key] = snapshot.val();
//  renderName(nameObj);
//});

    refName.on("child_added", (snapshot) => {
      // データベースと同期
      //nameObj[snapshot.key] = snapshot.val();

      defRenderName({
        id: snapshot.key,
        value: snapshot.val()
      });
    });

    refName.on("value", (snapshot) => {
      renderName(snapshot.val());
    });

    refCount.on("child_added", (snapshot) => {
      console.log('hoge');
      // データベースと同期
      countObj[snapshot.key] = snapshot.val();

      defRenderCount({
        id: snapshot.key,
        value: snapshot.val()
      });
    });

    refCount.on("value", (snapshot) => {
      console.log('fuga');
      let snapshotObj = snapshot.val();

      // データベースと同期
      for (let key in snapshotObj){
        countObj[key] = snapshotObj[key];
      }

      renderCount(snapshot.val());
    });

    refView.on("child_added", (snapshot) => {
      if(snapshot.val() === true) {
        $count.removeClass('is-hide');
      } else {
        $count.addClass('is-hide');
      }
    });

    refView.on("value", (snapshot) => {
      if(snapshot.val().view === true) {
        $count.removeClass('is-hide');
      } else {
        $count.addClass('is-hide');
      }
    });

    refCountStop.on("child_added", (snapshot) => {
      if(snapshot.val() === true) {
        countStop = true;
        showCountStop();
      } else {
        countStop = false;
        hideCountStop();
      }
    });

    refCountStop.on("value", (snapshot) => {
      if(snapshot.val().countStop === true) {
        countStop = true;
        showCountStop();
      } else {
        countStop = false;
        hideCountStop();
      }
    });

    /*
     * その他
     */
    let checkFontSize = (targetCountObj) => {
      let $countTextLength = targetCountObj.text().length;
      if($countTextLength > 3) {
        targetCountObj.addClass('count__num--long');
      } else {
        targetCountObj.removeClass('count__num--long');
      }
    };

    let show = () => {
      $layer.removeClass('dn');
      $layerLoading.removeClass('dn');
      $layer.addClass('is-show');
    };

    let hide = () => {
      $layer.removeClass('is-show').one(TRANSITION_END, () => {
        $layerLoading.addClass('dn');
        $layer.addClass('dn');
      });
    };

    let showCountStop = () => {
      $layer.removeClass('dn');
      $layerCountStop.removeClass('dn');
      $layer.addClass('is-show');
    };

    let hideCountStop = () => {
      $layer.removeClass('is-show').one(TRANSITION_END, () => {
        $layerCountStop.addClass('dn');
        $layer.addClass('dn');
      });
    };

    $post.on(ANIMATION_END, (e) => {
      $(e.currentTarget).removeClass('is-animated');
    });

  }
}
</script>
