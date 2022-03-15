<template>
  <div class="sidebar-wrapper" :class="{ 'sidebar-expanded': sidebarExpanded }">
    <div class="nav-header-container">
      <div class="nav-header">
        <div class="short-hand">HRB</div>
        <div class="long-hand">Employee self service</div>
      </div>

      <div class="toggle-sidebar-control-container" @click="sidebarToggle">
        <div class="outer-circle">
          <div class="inner-circle">
            <span> {{ sidebarExpanded ? ` < ` : ` > ` }} </span>
          </div>
        </div>
      </div>
    </div>

    <div class="product-origin-name">
      <h4>Mercans Estonia</h4>
    </div>

    <ul class="sidebar-nav">
      <template v-for="item in sidebarList" :key="item.title">
        <li v-if="item.enabled">
          <router-link :to="item.path">{{
            item.title.split("_").join(" ")
          }}</router-link>
        </li>
      </template>
    </ul>

    <div class="sidebar-footer">
      <span>Mercans © 2021</span>
    </div>
  </div>
</template>

<script>
import { MENU_LIST } from "../constant/Menu.constant";
export default {
  name: "SidebarComponent",
  data() {
    return {
      sidebarList: [...MENU_LIST],
      sidebarExpanded: true,
    };
  },
  methods: {
    sidebarToggle() {
      this.$data.sidebarExpanded = !this.$data.sidebarExpanded;
      this.$emit("sidebar-event", this.$data.sidebarExpanded);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
