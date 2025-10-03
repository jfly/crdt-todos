import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
// import { StubComponent } from "@saflib/vue/components";
import NoteList from "./pages/note-list/NoteList.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: NoteList,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
