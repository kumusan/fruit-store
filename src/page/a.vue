<template>
  <p>test</p>
  <button @click="goHome">Home</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/");
    };

    return { goHome };
  },
});
</script>
