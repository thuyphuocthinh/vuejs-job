<script setup>
import JobListing from "@/components/JobListing.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: {
    type: Number,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({ isLoading: true, jobs: [] });

onMounted(async () => {
  try {
    state.isLoading = true;
    const response = await axios.get(`/api/jobs`);
    state.jobs = await response.data;
  } catch (error) {
    console.error(">>>> error fetching jobs: ", error.message);
  } finally {
    setTimeout(() => {
      state.isLoading = false;
    }, 1000);
  }
});
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- show-loading-spinner -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <div
        v-if="!state.isLoading"
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
<style lang="css" scoped></style>
