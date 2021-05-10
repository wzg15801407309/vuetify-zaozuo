<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="teal"
    height="45px"
    fixed
  >
    <v-btn height="100%">
      <span>Recents</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
      <v-icon>mdi-map-marker</v-icon>
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

<style lang="sass" scoped>
</style>