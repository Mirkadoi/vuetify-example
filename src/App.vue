<template>
    <v-app>
        <v-app-bar
                app
                hide-on-scroll
        >
            <v-toolbar-title class="headline"><strong>ShopList</strong></v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn-toggle>
                <v-btn to="/">
                    Products
                </v-btn>

                <v-btn to="/basket">
                    Basket
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-content>
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </v-content>

        <v-footer
                app
                class="font-weight-medium"
        >
            <v-col
                    class="text-center"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — ShopList
            </v-col>
        </v-footer>
    </v-app>
</template>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1ms;
    }

</style>
