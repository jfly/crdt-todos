import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import {StubComponent} from "./components.ts";

const routes: RouteRecordRaw[] = [{ path: "/", component: StubComponent}];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
