<template>
    <v-container>
        <v-text-field
                v-model="productName"
                label="Введите название продукта"
                outlined
                @keydown.enter="create"
        >
            <v-fade-transition slot="append">
                <v-icon v-if="productName" @click="create">add_circle</v-icon>
            </v-fade-transition>
        </v-text-field>
        <v-row>
            <v-col cols="12">
                <h2>Число покупок: {{products.length}}</h2>
            </v-col>
            <v-col class="py-1" v-for="(n, index) in products" :key="index" cols="12">
                <products-item :product="n" @remove="remove(index)"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ProductsItem from "./ProductsItem";

    export default {
        data: () => ({
            products: ["Хлеб", "Cоль"],
            productName: null,
        }),
        components: {
            ProductsItem
        },
        computed: {},
        methods: {
            create() {
                this.products = [...this.products, this.productName];
                this.productName = null;
            },
            remove(i) {
                this.products.splice(i, 1);
            }
        }
    };
</script>

<style>
</style>
