<template>
  <div>
		<div v-if="loading">
			Data is loading...
		</div>
		<div v-else>
			<bookable-list-item
				:item-title="bookable.title"
				:item-content="bookable.content"
				:price="100000"
				v-for="(bookable, index) in bookables"
				:key="index"
			></bookable-list-item>
		</div>

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
      bookables: null,
      loading: false,
    };
  },
  //   beforeCreate() {
  //     console.log("beforeCreate");
  //   },
  created() {
		this.loading = true;
    setTimeout(() => {
      this.bookables = [
        {
          title: "The title 1",
          content: "The content 1",
        },
        {
          title: "The title 2",
          content: "The content 2",
        },
      ];
			this.loading = false;
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
