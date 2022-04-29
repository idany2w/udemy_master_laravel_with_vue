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
      :price="100002"
    ></bookable-list-item>
    <bookable-list-item
      :item-title="bookable3.title"
      :item-content="bookable3.content"
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
      bookable1: null,
      bookable2: null,
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
      this.bookable1 = {
        title: "The title 1",
        content: "The content 1",
      }
			this.bookable2 = {
        title: "The title 2",
        content: "The content 2",
      }
			this.bookable3 = {
        title: "The title 3",
        content: "The content 3",
      }
    }, 1000);
		
		setTimeout(() => {
			console.log('1 oops');
			this.bookable2 = {
        title: "1 oops!",
        content: "1 oops!",
      }
			this.bookable3 = {
        title: "1 oops!",
        content: "1 oops!",
      }
		}, 2000);
		
		setTimeout(() => {
			console.log('2 oops');
			this.bookable3 = {
        title: "2 oops!",
        content: "2 oops!",
      }
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
