import { mountWithPlugins } from "@saflib/vue/testing";
import type { ComponentMountingOptions } from "@vue/test-utils";
import type { Component } from "vue";
import { todosSdkStrings } from "./strings.ts";
import { todosServiceFakeHandlers } from "./fakes.ts";
import { router } from "./router.ts";

export const mountTestApp = <C extends Component>(
  Component: C,
  options: ComponentMountingOptions<C> = {},
) => {
  return mountWithPlugins(Component, options, {
    i18nMessages: {
      ...todosSdkStrings,
    },
    router,
  });
};

export const testAppHandlers = [...todosServiceFakeHandlers];
