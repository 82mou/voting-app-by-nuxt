<template>
  <div>
    <div class="wrapper">
      <header class="l-header">
        <div class="l-container">
          <!--<p class="logo screen-logo"><img src="assets/images/logo.png" alt=""></p>-->
          <h1 class="screen-title js-title"></h1>
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
                    <p class="screen-count__name__text js-name-a"></p>
                  </div>
                  <p class="screen-count__num js-count js-count-a is-hide"></p>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">B</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text js-name-b"></p>
                  </div>
                  <p class="screen-count__num js-count js-count-b is-hide"></p>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">C</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text js-name-c"></p>
                  </div>
                  <p class="screen-count__num js-count js-count-c is-hide"></p>
                </div>
              </div>
              <div class="grid__item">
                <div class="js-post count screen-count">
                  <p class="screen-count__alphabet">D</p>
                  <div class="screen-count__name">
                    <p class="screen-count__name__text js-name-d"></p>
                  </div>
                  <p class="screen-count__num js-count js-count-d is-hide"></p>
                </div>
              </div>
            </div>
          </div>
          <p class="push-comment"><span class="push-comment-text js-push-comment-text"></span></p>
        </div>
      </main>
    </div>
    <div class="layer js-layer dn">
      <p class="layer__count-stop layer__count-stop--screen js-layer-count-stop dn">集計停止中</p>
    </div>
  </div>
</template>

<script>

export default {}
</script>
