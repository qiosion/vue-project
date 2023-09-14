<script setup>
    import CustomInputArgs from './CustomInputArgs.vue';
    import { ref } from 'vue'

    const first = ref('')
    const last = ref('')
    const middle = ref('')
</script>
<template>
    <v-app>
        <v-sheet class="ma-5">
            <v-card class="pa-4 ma-5">
                <p>first : {{ first }}</p>
                <p>middle : {{ middle }}</p>
                <p>last : {{ last }}</p>
            </v-card>
            <CustomInputArgs
                class="pa-4 ma-5"
                v-model:first-name="first"
                v-model:last-name="last"
                v-model:middle-name="middle"
            />
        </v-sheet>
    </v-app>
</template>