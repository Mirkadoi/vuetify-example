<template>
    <v-app>
        <v-app-bar
                app
                hide-on-scroll
        >
            <v-toolbar-title class="headline"><strong>ShopList</strong></v-toolbar-title>

            <v-spacer></v-spacer>
        //Ниже кнопки навигации на окторые я пытаюсь повесить классы
            <v-btn-toggle>
                <v-btn class="navsss" to="/" active-class="test">
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
        transition: opacity .1s;
    }

    .nav {
        a {
            font-weight: bold;
            text-decoration: none;
            /*color: white;*/

            /*&.router-link {*/
                /*color: #42b983;*/
            /*}*/

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .test {
        color: red;
    }

    .router-link-exact-active {
        color: #42b983;
    }

    .navsss {
        color: red;
    }

</style>
