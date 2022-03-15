<template>
  <div
    class="app-container"
    :class="{ 'app-sidebar-expanded': sidebarExpanded }"
  >
    <div class="sidebar-container">
      <SidebarComponent @sidebar-event="sidebarEventHandler" />
    </div>
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./components/Sidebar.vue";
export default {
  name: "App",
  components: { SidebarComponent },
  data() {
    return {
      sidebarExpanded: true,
    };
  },
  methods: {
    sidebarEventHandler(bool) {
      this.$data.sidebarExpanded = bool;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
