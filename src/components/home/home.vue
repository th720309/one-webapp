<template>
  <div class="one-home">
    <div class="home-header">
      <span class="title">一个·图文</span>
    </div>
    <div class="home-content">
      <div v-for="(item,index) in drawcontent" class="home-item">
        <div class="home-draw">
          <span class="time">{{item.maketime.split(' ')[0]}}</span>
          <span class="vol">{{item.hp_title}}</span>
          <img :src="item.hp_img_url" width="100%">
          <span class="title">{{item.hp_author}}</span>
          <span class="and">|</span>
          <span class="pic_info">{{item.image_authors}}</span>
        </div>
        <div class="home-word">
          <p class="forward">{{item.hp_content}}</p>
          <span class="word_info">{{item.text_authors}}</span>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from 'components/footer/footer.vue';
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  export default {
      props: {
        home: {
          type: Object
        }
      },
      data () {
          return {
              drawcontent: []
          };
      },
      created () {
        this.$http.get('http://v3.wufazhuce.com:8000/api/hp/bymonth/' + year + '-' + month + '-' + day + '%2000:00:00?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((response) => {
          response = response.body;
          this.drawcontent = response.data;
        });
      },
      components: {
        'v-footer': footer
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";

  .home-header
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
  .home-content
    .home-item
      margin-top: 24px
      border-1px(#eee)
      .home-draw
        position: relative
        text-align: center
        .time
          display: inline-block
          padding-top: 30px
          font-size: 23px
          font-family: cursive
          font-weight: 100
          color: #5d5a5a
        .vol
          display: block
          padding: 10px
          font-size: 12px
          font-weight: 100
          color: #9e9c9c
        .title, .and, .pic_info
          display: inline-block
          margin-top: 14px
          padding: 2px
          color: #9e9c9c
          font-size: 12px
      .home-word
        width: 80%
        margin: 20px auto
        text-align: center
        .forward
          font-size: 15px
          line-height: 28px
          color: #5d5a5a
          text-align: left
        .word_info
          font-size: 12px
          color: #9e9c9c
          display: inline-block
          margin-top: 20px
      &:last-child
        margin-bottom: 60px
</style>
