import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
// import { StubComponent } from "@saflib/vue/components";
import NoteList from "./pages/note-list/NoteList.vue";
import NoteView from "./pages/note-view/NoteView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: NoteList,
  },
  {
    path: "/note/:noteId",
    component: NoteView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
