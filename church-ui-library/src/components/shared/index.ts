import CCAppDrawer from "@/components/shared/drawers/CCAppDrawer.vue";
import CCHeader from "@/components/shared/headers/CCHeader.vue";
import CCMessages from "@/components/shared/components/CCMessages.vue";
import CCNotifications from "@/components/shared/components/CCNotifications.vue";
import CCDarkModeSwitch from "@/components/shared/components/CCDarkModeSwitch.vue";
import CCChurchDrawer from "@/components/shared/drawers/CCChurchDrawer.vue";

const Components = {
  CCAppDrawer,
  CCHeader,
  CCMessages,
  CCNotifications,
  CCChurchDrawer,
  CCDarkModeSwitch,
};

const VuetifyComponents = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
  // @ts-ignore
  install(Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name as keyof typeof Components]);
    });
  },
};

export default VuetifyComponents;
