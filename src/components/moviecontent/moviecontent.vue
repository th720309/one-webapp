<template>
  <transition name="fade" >
    <div class="moviecontent">
      <div class="moviecontent-header">
        <i class="fa fa-arrow-left" aria-hidden="true" @click="movieback"></i>
        <span class="title">一个·影视</span>
      </div>
      <span style="display: block;margin: 200px auto 0;">接口未开放，暂未实现</span>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

  export default{
    data () {
      return {
        moviecontent: [],
        index: 0
      };
    },
    methods: {
      movieback () {
        this.$router.push({
          path: 'movie'
        });
      }
    },
    created () {
      this.index = parseInt(this.$route.query.id);
      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((response) => {
        response = response.body;
        this.moviecontent = response.data;
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";
  .moviecontent
    position:absolute
    top:0
    left:0
    width:100%
    height:100%
    background: #ffffff
    z-index:100
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.2s linear
      transform translate3d(0, 0, 0)
    &.fade-enter, &.fade-leave-active
      opacity: 0
      transform translate3d(100%, 0, 0)
    .moviecontent-header
      position: fixed
      top: 0
      width: 100%
      text-align: center
      height: 44px
      line-height: 44px
      z-index: 99
      background: #eee
      color: #7e8c8d
      font-family: cursive
      .fa-arrow-left
        display: inline-block
        position: absolute
        left: 20px
        top: 14px
    .moviecontent-wrapper
      margin-top: 70px
      padding: 0 15px
      .title
        font-size: 18px
        line-height: 28px
        color: black
      .author
        display: block
        margin-top: 14px
        font-size: 14px
        color: #9e9c9c
      .content
        margin-top: 25px
        line-height: 30px
        color: #444343
        img
          width: 100%
</style>
