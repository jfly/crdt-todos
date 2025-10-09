import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
// import { StubComponent } from "@saflib/vue/components";
import NoteList from "./pages/note-list/NoteList.vue";
import NoteViewAsync from "./pages/note-view/NoteViewAsync.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: NoteList,
  },
  {
    path: "/note/:noteId",
    component: NoteViewAsync,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
