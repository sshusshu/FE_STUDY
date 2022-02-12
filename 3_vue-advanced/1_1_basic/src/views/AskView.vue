<template>
  <div>
    <p v-for="ask in asks" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a><br>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { fetchAsk } from "../api/index";

export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    fetchAsk().then(({ data }) => (this.asks = data));
  },
};
</script>

<style>
</style>
