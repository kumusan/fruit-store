<template>
  <h1>{{ msg }}</h1>
  <FormComponent />
  <p>{{ state }}</p>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { counterStore } from "../stores/counter";
import FormComponent from "./form.vue";

export default defineComponent({
  name: "HelloWorld",

  props: {
    msg: {
      type: String,
      required: true,
    },
  },

  components: {
    FormComponent,
  },

  setup: () => {
    const store = counterStore();

    const state = computed(() => store.counter);

    return { state };
  },
});
</script>
