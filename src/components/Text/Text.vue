<script>
import Vue from "vue";

import styles from "./Text.css";

const getTextByType = (type = "body1") => {
  const elements = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "label",
    subtitle2: "label",
    body1: "p",
    body2: "p",
    caption1: "span",
    caption2: "span",
    overline: "span"
  };
  return elements[type];
};

export default Vue.component('sk-text', {
  render: function (createElement) {
    return createElement(
      getTextByType(this.type),
      {
        attrs: {
          class: styles[this.type]
        }
      },
      this.$slots.default
    );
  },
  props: {
    type: {
      validator: value => {
        return [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "subtitle1",
          "subtitle2",
          "body1",
          "body2",
          "caption1",
          "caption2",
          "overline"
        ];
      },
      default: "body1"
    }
  },
  data() {
    return {
      styles
    };
  }
});
</script>
