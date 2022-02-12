<template>
  <div>
    <p v-for="job in jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a><br>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { fetchJobs } from "../api/index";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobs().then(({ data }) => (this.jobs = data));
  },
};
</script>

<style>
</style>
