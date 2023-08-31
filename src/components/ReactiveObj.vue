<script setup>
    import { reactive } from 'vue';

    const state = reactive({ count: 0}) // 반응형 O

    let n = state.count; // 반응형 X

    const toggle1 = () => {
        state.count++;
    }
    
    const toggle2 = () => {
        n++;
    }

    const toggle3 = () => {
        state.count++;
        n++;
    }
</script>

<template>
    <p>
        state: {{ state }}
    </p>
    <br>
    <p>
        state.count: {{ state.count }}
    </p>
    <p>
        n: {{ n }}
    </p>
    <br>
    <v-btn @click="toggle1" class="ma-2">count 증가</v-btn>
    <br>
    <v-btn @click="toggle2" class="ma-2">n 증가</v-btn>
    <br>
    <v-btn @click="toggle3" class="ma-2">n, count 증가</v-btn>
</template>