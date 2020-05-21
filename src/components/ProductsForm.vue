<template>
    <v-container>
        <v-row>
            <v-col cols="12">
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
            </v-col>
 
            <v-col cols="12">
                <h2>Число покупок: {{products.length}}</h2>
            </v-col>
            <v-col class="py-1" v-for="(n, index) in products" :key="index" cols="12">
                <v-hover
                        v-slot:default="{ hover }"
                >
                    <v-card class="pa-2" outlined>
                        <v-card-title class="pa-0 justify-space-between title">
                            <span>{{n}}</span>
                            <v-fade-transition>
                                <v-icon v-if="hover" @click="remove">remove_circle</v-icon>
                            </v-fade-transition>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // import ProductsItem from "./ProductsItem";

    export default {
        data: () => ({
            products: ["Хлеб", "Cоль"],
            productName: null,
        }),
        components: {
            // ProductsItem
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
