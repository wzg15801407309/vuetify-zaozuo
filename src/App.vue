<template>
  <v-app>
    <!-- appBar -->
    <v-main>
      <router-view />
    </v-main>
    <!-- button tab -->
    <TabControl />
  </v-app>
</template>

<script>
import TabControl from "@/components/tabControl";
export default {
  name: "App",
  components: {
    TabControl
  },
  data: () => ({}),
};
</script>
