<script setup>
    defineProps(['title'])
    const emit = defineEmits(['enlarge-text', 'reduce-text'])

    const enlarge = () => {
        // $emit('enlarge-text')
        emit('enlarge-text')
    }

    const reduce = () => {
        emit('reduce-text')
    }
</script>

<template>
    <div class="blog-post">
        <h4>{{ title }}</h4>
        <v-btn @click="$emit('enlarge-text')">텍스트 확대</v-btn>
        <!-- <v-btn @click="enlarge">텍스트 확대</v-btn> -->
        <v-btn @click="$emit('reduce-text')">텍스트 축소</v-btn>
    </div>
</template>

<style scoped>
    .blog-post {
        margin: 10px;
        border: 1px solid;
        padding: 5px;
    }
</style>