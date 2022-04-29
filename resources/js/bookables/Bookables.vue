<template>
  <div>
    <bookable-list-item
      :item-title="bookable1.title"
      :item-content="bookable1.content"
      :price="100000"
    ></bookable-list-item>
    <bookable-list-item
      :item-title="bookable2.title"
      :item-content="bookable2.content"
      :price="100001"
    ></bookable-list-item>
    <bookable-list-item
      item-title="The Title 2"
      item-content="The Content 2"
      :price="100002"
    ></bookable-list-item>
    <bookable-list-item
      item-title="The Title 3"
      item-content="The Content 3"
      :price="100003"
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
      bookable1: {
        title: "The title 1",
        content: "The content 1",
      },
      bookable2: {
        title: "The title 2",
        content: "The content 2",
      },
    };
  },
  //   beforeCreate() {
  //     console.log("beforeCreate");
  //   },
  created() {
    console.log("created");
    console.log(this.bookable1);
    console.log(this.bookable2);

    setTimeout(() => {
      this.bookable1.title += " was created";
    }, 3000);
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
