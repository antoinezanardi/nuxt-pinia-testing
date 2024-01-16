<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
import { useRolesStore } from "~/stores/useCounterStore";

const { fetchAndSetRoles } = useRolesStore()
await fetchAndSetRoles();
</script>
