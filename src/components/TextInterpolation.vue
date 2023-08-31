<script setup>
    import { ref } from 'vue';
    const user = 'test_user';
    const msg = ref('Hello, World!');
    const msg2 = ref('흠');
</script>


<template>
    <span>{{ user }} : {{ msg }}</span>
    <hr>
    <span>{{ user }} : {{ msg2 }}</span>
</template>