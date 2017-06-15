<template>
  <div class="one-read">
    <div class="read-header">
      <span class="title">一个·阅读</span>
    </div>
    <div class="one-content">
      <div v-for="(item,index) in readcontent" link @click="go(item.item_id)" class="read-item">
        <div class="read-content">
          <span v-if="item.tag_list[0]" class="title">-<span style="padding: 0 5px">{{item.tag_list[0].title}}</span>-</span>
          <span v-else="item.tag_list[0]" class="title">-<span style="padding: 0 5px">阅读</span>-</span>
          <h1 class="titleitem">{{item.title}}</h1>
          <span class="author"><span>文</span><span style="padding: 0 3px">/</span>{{item.author.user_name}}</span>
          <img class="image" :src="item.img_url" width="100%">
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
  import readcontent from 'components/readcontent/readcontent.vue';
  import footer from 'components/footer/footer.vue';
  export default {
    props: {
      home: {
        type: Object
      }
    },
    data () {
      return {
        readcontent: []
      };
    },
    methods: {
      go (id) {
        this.$router.push({
          path: 'readcontent',
          query: {
            id: id
          }
        });
      }
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((response) => {
        response = response.body;
        this.readcontent = response.data;
      });
    },
    components: {
      'readcontent': readcontent,
      'v-footer': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";

  .read-header
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
    .read-item
      margin-top: 24px
      border-1px(#eee)
      padding: 0 30px
      margin-bottom: 45px;
      .read-content
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
