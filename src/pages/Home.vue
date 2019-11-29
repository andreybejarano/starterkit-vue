<template>
  <div :class="styles.root">
    <sk-text type="h1">{{great}}</sk-text>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import styles from './Home.css';
import 'Components/Text/Text';

export default {
  computed: {
    ...mapState({
      great: state => state.home.great
    })
  },
  data() {
    return {
      styles
    }
  }
};
</script>
