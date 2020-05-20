<template>
    <v-hover
            v-slot:default="{ hover }"
    >
        <v-card class="pa-2" outlined>
            <v-card-title class="pa-0 justify-space-between title">
                <span>{{product}}</span>
                <v-fade-transition>
                    <v-icon v-if="hover" @click="remove">remove_circle</v-icon>
                </v-fade-transition>
            </v-card-title>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        props: ["product"],
        methods: {
            remove() {
                this.$emit('remove')
            }
        }
    };
</script>
