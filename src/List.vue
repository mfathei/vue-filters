<template>
    <div >
        <h1>Filters & Mixins</h1>
        <hr>
        <input type="text" v-model="filteredText">
        <ul>
            <li v-for="(fruit, i) in filteredFruits" :key="i">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello World!",
      filteredText: "",
      fruits: ["Apple", "Mango", "Banana", "Melon"]
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filteredText);
      });
    }
  }
};
</script>

<style>

</style>
