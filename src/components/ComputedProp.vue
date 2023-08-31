<script setup>
    import { ref, reactive, computed } from 'vue';

    const author = reactive({
        name: 'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })

    // 계산된 ref
    const publishedBooksMessage = computed(() => {
        return author.books.length > 0 ? 'Yes' : 'No'
    })
    
    // 토글
    const toggle = () => {
        if (author.books.length > 0) {
            author.books = []
        } else {
            author.books = ["1", "2"]
        }
    }

    // 토글할 때 마다 책 목록을 보이는 것
    const showBooks = ref(true);

    function toggle2() {
        showBooks.value = !showBooks.value;
    }

</script>

<template>
    <p>책을 가지고 있는가?</p>
    <span>{{ publishedBooksMessage }}</span>
    <!-- <div>책 목록 : {{ author.books }}</div> -->
    <div v-if="showBooks">책 목록 : {{ author.books }}</div>
    <br>
    <v-btn @click="toggle" class="ma-2">TOGGLE</v-btn>
    <v-btn @click="toggle2" class="ma-2">책 목록 보기</v-btn>
</template>