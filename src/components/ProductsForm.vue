<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field
                        v-model="productName"
                        label="Введите название продукта"
                        outlined
                        @keydown.enter="addProduct"
                >
                    <v-fade-transition slot="append">
                        <v-icon v-if="productName" @click="addProduct">add_circle</v-icon>
                    </v-fade-transition>
                </v-text-field>
            </v-col>

            <v-col cols="12">
                <h2>Число покупок: {{productsCount}}</h2>
            </v-col>
            <v-col class="py-1" v-for="(n, index) in products" :key="index" cols="12">
                <v-hover
                        v-slot:default="{ hover }"
                >
                    <v-card class="pa-2" outlined>
                        <v-card-title class="pa-0 justify-space-between title">
                            <span>{{n}}</span>
                            <v-fade-transition>
                                <v-icon v-if="hover" @click="removeProduct(index)">remove_circle</v-icon>
                            </v-fade-transition>
                        </v-card-title>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';

    const { mapState, mapActions } = createNamespacedHelpers('basket');

    export default {
        data: () => ({
            productName: null,
        }),
        computed: {
            ...mapState([
                'products'
            ]),
            productsCount() {
                return this.products.length || 0;
            }
        },
        methods: {
            ...mapActions({
                create: 'create',
                remove: 'remove',
            }),
            addProduct() {
                this.create(this.productName);
                this.productName = null;
            },
            removeProduct(i) {
                this.remove(i);
            }
        },
    };
</script>

<style>
</style>
