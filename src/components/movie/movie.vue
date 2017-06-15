<template>
  <div class="one-movie">
    <div class="movie-header">
      <span class="title">一个·电影</span>
    </div>
    <div class="one-content">
      <div v-for="(item,index) in moviecontent" link @click="go(index)" class="movie-item">
        <div class="movie-content">
          <span class="title">-<span style="padding: 0 5px">影视</span>-</span>
          <h1 class="titleitem">{{item.title}}</h1>
          <span class="author"><span>文</span><span style="padding: 0 3px">/</span>{{item.author.user_name}}</span>
          <img class="image" :src="item.img_url" width="100%">
          <p class="forward">{{item.forward}}</p>
          <span class="subtitle"><span>——</span>《{{item.subtitle}}》</span>
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
  import moviecontent from 'components/moviecontent/moviecontent.vue';
  export default {
    props: {
      home: {
        type: Object
      }
    },
    data () {
      return {
        moviecontent: []
      };
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((response) => {
        response = response.body;
        this.moviecontent = response.data;
      });
    },
    methods: {
      go (id) {
        this.$router.push({
          path: 'moviecontent',
          query: {
            id: id
          }
        });
      }
    },
    components: {
      'moviecontent': moviecontent,
      'v-footer': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxin.styl";

  .movie-header
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
    .movie-item
      margin-top: 24px
      border-1px(#eee)
      padding: 0 30px
      margin-bottom: 45px;
      .movie-content
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
        .subtitle
          display: block
          text-align: right
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
