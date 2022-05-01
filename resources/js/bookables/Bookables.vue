<template>
  <div>
    <p>Rows is: {{ rows }}</p>
    <div v-if="loading">Data is loading...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :item-title="bookable.title"
            :item-content="bookable.content"
            :price="100000"
          ></bookable-list-item>
        </div>
        <div
          class="col"
          v-for="p in placeholdersInRow(row)"
          :key="'placeholder' + row + p"
        ></div>
      </div>
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
      colsumns: 3, //this is bad, I condemn
    };
  },
  computed: {
    rows() {
      return !this.bookables
        ? 0
        : Math.ceil(this.bookables.length / this.colsumns);
    },
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice(
        (row - 1) * this.colsumns,
        row * this.colsumns
      );
    },
    placeholdersInRow(row) {
      return this.colsumns - this.bookablesInRow(row).length;
    },
  },
  created() {
    this.loading = true;

    const p = new Promise((resolve, reject) => {
      console.log(resolve);
      console.log(reject);
      setTimeout(() => {
        resolve("Resolved");
      }, 3000);
    })
      .then((result) => {
        return 'First then ' + result;
      })
      .then((result) => {
        console.log('Second then', result);
      })
      .catch((result) => {
        console.log('Error', result);
      });
    console.log(p);

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
        {
          title: "The title 2",
          content: "The content 2",
        },
        {
          title: "The title 2",
          content: "The content 2",
        },
        {
          title: "The title 2",
          content: "The content 2",
        },
        {
          title: "The title 2",
          content: "The content 2",
        },
        {
          title: "The title 2",
          content: "The content 2",
        },
        {
          title: "The title 2",
          content: "The content 2",
        },
        {
          title: "The title 2",
          content: "The content 2",
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
