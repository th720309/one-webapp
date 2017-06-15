<template>
  <div class="one-music">
    <div class="music-header">
      <span class="title">一个·音乐</span>
    </div>
    <div class="one-content">
      <div v-for="(item,index) in musiccontent" class="music-item" link @click="go(item.item_id)">
        <div class="music-content">
          <span class="title">-<span style="padding: 0 5px">音乐</span>-</span>
          <h1 class="titleitem">{{item.title}}</h1>
          <span class="author"><span>文</span><span style="padding: 0 3px">/</span>{{item.author.user_name}}</span>
          <img class="image" :src="item.img_url" width="100%">
          <div class="musicinfo">
            {{item.music_name}}
            <span class="and">·</span>
            {{item.audio_author}}
            <span class="and">|</span>
            {{item.audio_album}}
          </div>
          <p class="forward">{{item.forward}}</p>
          <span class="time">{{item.post_date.split(' ')[0]}}</span>
          <div class="lovecount">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <span>{{item.like_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from 'components/footer/footer.vue';
  import musiccontent from 'components/musiccontent/musiccontent.vue';
  export default {
    props: {
      home: {
        type: Object
      }
    },
    data () {
      return {
        musiccontent: []
      };
    },
    methods: {
      go (id) {
        this.$router.push({
          path: 'musiccontent',
          query: {
            id: id
          }
        });
      }
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((response) => {
        response = response.body;
        this.musiccontent = response.data;
      });
    },
    components: {
      'v-footer': footer,
      'musiccontent': musiccontent
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";

  .music-header
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
  .one-content
    .music-item
      margin-top: 24px
      border-1px(#eee)
      padding: 0 30px
      margin-bottom: 45px;
      .music-content
        position: relative
        padding-top: 30px
        text-align: center
        .titleitem, .author, .forward
          text-align: left
        .title
          font-size: 12px
          color: #9e9c9c
        .titleitem
          margin-top: 18px
          font-size: 18px
          line-height: 28px
          color: #5d5a5a
        .author
          display: block
          margin-top: 14px
          font-size: 14px
          color: #9e9c9c
        .image
          margin: 15px 0
          width: 60%
          border-radius: 50%
        .musicinfo
          margin: 10px 0
          font-size: 12px
          text-align: left
          color: #bbb
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .forward
          font-size: 14px
          line-height: 28px
          color: #9e9c9c
        .time
          float: left
          margin-top: 20px
          font-size: 12px
          color: #9e9c9c
        .lovecount
          float: right
          margin-top: 20px
          font-size: 12px
          color: #9e9c9c
      &:last-child
        margin-bottom: 100px
</style>
