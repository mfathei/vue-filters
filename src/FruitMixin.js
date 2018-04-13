export const fruitMixin = {
    data() {
        return {
            filteredText: "",
            fruits: ["Apple", "Mango", "Banana", "Melon"]
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(element => {
                return element.match(this.filteredText);
            });
        }
    },
    created() {
        console.log('Created');
    }
}