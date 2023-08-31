<script setup>
    import { ref } from 'vue'

    const count = ref(0)

    const toggle1 = () => {
        count.value++;
    }

    function callSomeFunction(obj) {
        obj.value++;
    }

    const toggle2 = () => {
        callSomeFunction(count);
    }
</script>

<template>
    <p>
        count: {{ count }}
    </p>
    <v-btn @click="toggle1" class="ma-2">증가1</v-btn>
    <v-btn @click="toggle2" class="ma-2">증가2</v-btn>
</template>