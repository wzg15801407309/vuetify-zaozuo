<template>
  <v-app>
    <v-main>
      <router-view />
      <tabControl />
    </v-main>
  </v-app>
</template>

<script>
import tabControl from "@/components/tabControl";
export default {
  name: "App",
  components: {
    tabControl
  },
  data: () => ({}),
};
</script>
