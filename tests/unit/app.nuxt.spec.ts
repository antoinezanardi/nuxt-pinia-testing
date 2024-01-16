import { mountSuspended } from "@nuxt/test-utils/runtime";
import { createTestingPinia } from "@pinia/testing";
import { expect } from "vitest";
import App from "~/app.vue";
import { useRolesStore } from "~/stores/useCounterStore";

describe("App Component", () => {
  describe("Store", () => {
    it("should call method from store when mounted.", async() => {
      const wrapper = await mountSuspended(App, {
        global: {
          plugins: [createTestingPinia()],
        },
      });
      // const button = wrapper("button");
      const { fetchAndSetRoles } = useRolesStore();

      expect(fetchAndSetRoles).toHaveBeenCalled();
    });
  });
});
