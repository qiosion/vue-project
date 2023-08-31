<script setup>
    import { ref } from 'vue';

    const imagePath = 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png';
</script>

<template>
    <p>이미지 URL {{ imagePath }}</p>
    <br>
    <img :src="imagePath"/>
</template>