<template>
  <div>
    <bookable-list-item
      item-title="The Title"
      item-content="The Content"
      :price="100000"
    ></bookable-list-item>
    <bookable-list-item
      item-title="The Title 1"
      item-content="The Content 1"
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
};
</script>
