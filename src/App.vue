<template>
    <v-app>
        <v-content>
            <v-app-bar
                    color="secondary"
                    dark
                    hide-on-scroll
            >
                <span class="headline"><strong>ShopList</strong></span>
            </v-app-bar>
        </v-content>

        <v-content>
            <products-form />
        </v-content>

        <v-content>
            <v-footer
                    absolute
                    class="font-weight-medium"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    {{ new Date().getFullYear() }} — ShopList
                </v-col>
            </v-footer>
        </v-content>

    </v-app>
</template>

<script>
    import ProductsForm from './components/ProductsForm';

    export default {
        name: 'App',

        components: {
            ProductsForm,
        }
    };
</script>
