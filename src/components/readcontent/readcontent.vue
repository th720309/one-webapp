<template>
  <transition name="fade" >
    <div class="readcontent">
      <div class="readcontent-header">
        <i class="fa fa-arrow-left" aria-hidden="true" @click="readback"></i>
        <span class="title">一个·文章</span>
      </div>
      <div class="readcontent-wrapper">
        <h1 class="title">{{readcontent.hp_title}}</h1>
        <span class="author"><span>文</span><span style="padding: 0 3px">/</span>{{readcontent.hp_author}}</span>
        <div class="content" v-html="readcontent.hp_content"></div>
        <div class="author_detail">
          <span class="and">作者</span>
          <img :src="readcontent.author[0].web_url">
          <span class="name">
            <span class="user_name">{{readcontent.author[0].user_name}}</span>
            <span class="wb_name">{{readcontent.author[0].wb_name}}</span>
          </span>
          <span class="desc">{{readcontent.author[0].summary}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        readcontent: {}
      };
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/essay/' + this.$route.query.id + '?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((response) => {
        response = response.body;
        this.readcontent = response.data;
      });
    },
    methods: {
        readback () {
          this.$router.push({
            path: 'read'
          });
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";
  .readcontent
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
    .readcontent-header
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
    .readcontent-wrapper
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
      .author_detail
        margin: 25px 0
        position: relative
        .and
          display: block
          padding-left: 20px
          color: #6b6a6a
          padding-bottom: 10px;
          borderbottom-1px(black)
        img
          width: 70px
          height: 70px
          margin-top: 20px
          border-radius: 50%
        .name
          display: inline-block
          position: absolute
          top: 50px
          padding-left: 15px
          padding-top: 10px
          font-size: 14px
          color: #797979
        .desc
          position: absolute
          top: 70px
          padding-left: 15px
          padding-top: 10px
          font-size: 14px
          color: #a7a5a5
</style>
