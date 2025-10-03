import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import { StubComponent } from "@saflib/vue/components";
import NoteListAsync from "./pages/note-list/NoteListAsync.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: NoteListAsync,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
