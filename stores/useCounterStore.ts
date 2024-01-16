import { defineStore } from "pinia";

const useRolesStore = defineStore("roles", () => {
  async function fetchAndSetRoles(): Promise<void> {
    console.log("fetchAndSetRoles");
  }
  return {
    fetchAndSetRoles,
  };
});

export { useRolesStore };
