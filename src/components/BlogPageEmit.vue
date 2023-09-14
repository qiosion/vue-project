<script setup>
    import { ref } from 'vue';
    import BlogPostEmit from './BlogPostEmit.vue';

    const postFontSize = ref(1)
    const posts = ref([
        { id: 1, title: "Vue와 함께한 나의 여행" },
        { id: 2, title: "Vue로 블로깅하기" },
        { id: 3, title: "Vue가 재미없는 이유" }
    ])
</script>

<template>
    <div :style="{ fontSize: postFontSize + 'em'}">
        <BlogPostEmit
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            @enlarge-text="postFontSize += 0.1"
            @reduce-text="postFontSize -= 0.1"
		/>
    </div>
</template>

<style scoped>
    .blog-post {
        margin: 10px;
        border: 1px solid;
        padding: 5px;
    }
</style>