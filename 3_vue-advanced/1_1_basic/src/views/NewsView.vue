<template>
  <div>
    <p v-for="news in news" :key="news.id">
      <a :href="news.url">{{ news.title }}</a><br>
      <small>{{ news.time_ago }} by {{ news.domain }}</small>
    </p>
  </div>
</template>

<script>
import { fetchNews } from "../api/index";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNews().then(({ data }) => (this.news = data));
  },
};
</script>

<style>
</style>
