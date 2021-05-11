<!-- button bar 的修改 -->
<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    height="45px"
    fixed
    app
  >
    <v-btn height="100%"  >
      <span>首页</span>
      <img src="../../assets/icon/shouye.svg" alt="" srcset="">
    </v-btn>

    <v-btn height="100%">
      <span>发现</span>
      <v-icon>$vuetify.icons.MyIcon</v-icon>
      <!-- <img src="../../assets/icon/icon_find.svg" alt="" srcset=""> -->
    </v-btn>

    <v-btn height="100%">
      <span>分类</span>
       <v-icon>my-icon</v-icon>
      <!-- <img src="../../assets/icon/fenlei.svg" alt="" srcset=""> -->
    </v-btn>
    <v-btn height="100%">
      <span>购物车</span>
      <img src="../../assets/icon/gouwuche.svg" alt="" srcset="">
    </v-btn>
    <v-btn height="100%">
      <span>我的</span>
      <v-icon>mdi-history</v-icon>
      <!-- <img src="../../assets/icon/wode.svg" alt="" srcset=""> -->
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
    name:"tabControl",
    components:{},
    data: () => ({ activeBtn: 1,}),
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.v-btn {
  img{
    width: 20px;
    height: 20px;
  }
}
</style>