<template>
  <input type="number" v-model="state.inputNumber" />
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "vue";
import { counterStore } from "../stores/counter";

interface State {
  inputNumber: number;
}

export default defineComponent({
  name: "FormComponent",

  setup: () => {
    const state = reactive<State>({
      inputNumber: 0,
    });

    watchEffect(() => {
      counterStore().setNumber(state.inputNumber);
      console.log(`counter state ${counterStore().counter}`);
    });

    return {
      state,
    };
  },
});
</script>
