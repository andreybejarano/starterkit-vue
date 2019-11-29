<template>
  <v-container :class="styles.root" fluid>
    <sk-sidebar :d="'asasas'"></sk-sidebar>
    <div :class="styles.content">
      <sk-header></sk-header>
      <router-view />
      <sk-footer></sk-footer>
    </div>
  </v-container>
</template>

<script>
import SkHeader from "@/layout/components/Header.vue";
import SkFooter from "@/layout/components/Footer.vue";
import SkSidebar from "@/layout/components/Sidebar.vue";
import styles from "./Default.css";
export default {
  components: {
    SkHeader,
    SkFooter,
    SkSidebar
  },
  data() {
    return {
      styles
    };
  }
};
</script>
