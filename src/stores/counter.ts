import { defineStore } from "pinia";

export const counterStore = defineStore({
  id: "counter",

  state: () => ({
    counter: 0,
    name: "Counter",
  }),

  getters: {},

  actions: {
    setNumber(value: number) {
      return (this.counter = value);
    },
    reset() {
      return (this.counter = 0);
    },
  },
});
