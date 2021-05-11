import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import MyIcon from "../components/common/icons/MyIcon.vue"

Vue.use(Vuetify,{
    icons: {
        myIcon: {
          component: MyIcon,
          props: {
            name: "my-icon"
          }
        },
      }
});

export default new Vuetify({});
