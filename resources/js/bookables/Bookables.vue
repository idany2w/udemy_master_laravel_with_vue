<template>
  <div>
    <bookable-list-item
			v-if="bookable1"
      :item-title="bookable1.title"
      :item-content="bookable1.content"
      :price="100000"
    ></bookable-list-item>
    <bookable-list-item
			v-if="bookable2"
      :item-title="bookable2.title"
      :item-content="bookable2.content"
      :price="100002"
    ></bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
  data() {
    return {
      bookable1: null,
      bookable2: null,
    };
  },
  //   beforeCreate() {
  //     console.log("beforeCreate");
  //   },
  created() {
    setTimeout(() => {
      this.bookable1 = {
        title: "The title 1",
        content: "The content 1",
      };
      this.bookable2 = {
        title: "The title 2",
        content: "The content 2",
      };
    }, 1000);
  },
  //   beforeMount() {
  //     console.log("beforeMount");
  //   },
  //   mounted() {
  //     console.log("mounted");
  //   },
  //   beforeDestroy() {
  //     console.log("beforeDestroy");
  //   },
  //   destroyed() {
  //     console.log("destroyed");
  //   },
};
</script>
