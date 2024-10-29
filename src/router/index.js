import AddJob from "@/views/AddJob.vue";
import EditJob from "@/views/EditJob.vue";
import Home from "@/views/Home.vue";
import JobDetail from "@/views/JobDetail.vue";
import Jobs from "@/views/Jobs.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },
    {
      path: "/jobs/:id",
      name: "job-detail",
      component: JobDetail,
    },
    {
      path: "/jobs/edit/:id",
      name: "job-edit",
      component: EditJob,
    },
    {
      path: "/jobs/add",
      name: "job-add",
      component: AddJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
