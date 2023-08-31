<script setup>
    import { ref } from 'vue';

    const attributeName = ref('href');
    const url = 'http://www.naver.com';
</script>

<template>
    <a :[attributeName]="url">속성명: {{ attributeName }} 링크</a>
</template>