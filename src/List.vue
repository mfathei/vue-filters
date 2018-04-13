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
import { fruitMixin } from "./FruitMixin";

export default {
  mixins: [fruitMixin]
};
</script>

<style>

</style>
