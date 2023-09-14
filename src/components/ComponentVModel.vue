<script setup>
    import CustomInput from './CustomInput.vue';
    import CustomInputComputed from './CustomInputComputed.vue';

    import { ref } from 'vue'

    const text1 = ref('')
    const text2 = ref('')
    const text3 = ref('')
</script>

<template>
    <v-app>
        <v-sheet class="ma-5">
            <p>CustomInput : {{ text1 }}</p>
            <CustomInput
                :model-value="text1"
                @update:model-value="(newValue) => text1 = newValue"
            />
        </v-sheet>

        <v-divider></v-divider>

        <v-sheet class="ma-5">
            <p>CustomInput v-model : {{ text2 }}</p>
            <CustomInput v-model="text2"/>
        </v-sheet>

        <v-divider></v-divider>

        <v-sheet class="ma-5">
            <p>CustomInput v-model-computed : {{ text3 }}</p>
            <CustomInputComputed v-model="text3"/>
        </v-sheet>
    </v-app>
</template>