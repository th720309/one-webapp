<template>
  <div class="footer">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/home">
          <i class="fa fa-home" aria-hidden="true"></i>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/read">
          <i class="fa fa-book" aria-hidden="true"></i>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/music">
          <i class="fa fa-music" aria-hidden="true"></i>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/movie">
          <i class="fa fa-film" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";
  #app
    .footer
      position: fixed
      bottom: 0
      width: 100%
      bottom: 0
      z-index: 99
      background: #fff
      .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
        border-1px(#eee)
        line-height: 50px
        .tab-item
          flex: 1
          text-align: center
          & > a
            display: block
            text-decoration: none
            font-size: 14px
            color: #949292
            .fa
              font-size: 20px;
            &.active
              color: black;
</style>
