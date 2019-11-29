<template>
  <v-navigation-drawer :class="styles.root" absolute :mini-variant.sync="mini" permanent>
    <v-list-item>
      <v-img max-height="50px" max-width="50px" src="assets/logo.png"></v-img>
      <v-list-item-title></v-list-item-title>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon :class="styles.icon">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import styles from './Sidebar.css';
export default {
  data() {
    return {
      styles,
      items: [
        { title: this.$props.d, icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-multiple-outline" }
      ],
      mini: true
    };
  },
  props: {
    d: ''
  }
};
</script>
