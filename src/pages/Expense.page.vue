<template>
  <div class="page-container">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>


<script>
export default {
  name: "ExpensePage",
  data() {
    return {
      pageTitle: "Expense Page",
    };
  },
};
</script>