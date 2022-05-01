<template>
  <div>
    <div v-if="loading">Data is loading...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col d-flex align-items-strech"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item v-bind="bookable"></bookable-list-item>
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

    const request = axios.get("/api/bookables").then((response) => {
      this.bookables = response.data;
      this.loading = false;
    });
  },
};
</script>
