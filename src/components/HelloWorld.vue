<template>
  <h1>{{ msg }}</h1>
  <FormComponent />
  <p>{{ state }}</p>
  <button @Click="goA">AAAA</button>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { counterStore } from "../stores/counter";
import FormComponent from "./form.vue";
import { useRouter } from "vue-router";

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
    const router = useRouter();
    const goA = () => {
      router.push("/a");
    };

    const store = counterStore();

    const state = computed(() => store.counter);

    return { state, goA };
  },
});
</script>
