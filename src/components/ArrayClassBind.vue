<script setup>
    import { ref, reactive } from 'vue'

    const activeClass = ref('active')
    const errorClass = ref('text-danger')

    const toggleActive = () => {
        if ( activeClass.value.length > 0 ) {
            activeClass.value = '';
        }
        else {
            activeClass.value = 'active';
        }
    }

    const toggleError = () => {
        if ( errorClass.value.length > 0 ) {
            errorClass.value = '';
        }
        else {
            errorClass.value = 'text-danger';
        }
    }

    // 토글 클릭하지 않아도 자동으로 깜빡이게 인터벌 셋팅
    setInterval(toggleActive, 500)
    setInterval(toggleActive, 500)
    
</script>

<template>
    <div
        class="static ma-2"
        :class="[activeClass, errorClass]">
        배열 클래스 바인딩 예제
    </div>

    <v-btn @click="toggleActive">
        Active button
    </v-btn>
    <v-btn @click="toggleError">
        Error button
    </v-btn>
</template>

<style>
    .active {
        background-color: #ffa600;
    }

    .text-danger {
        color: #720c0c;
    }
</style>