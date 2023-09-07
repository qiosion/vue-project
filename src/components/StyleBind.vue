<script setup>
    import { ref, reactive } from 'vue'

    const activeColor = ref('red')
    const fontSize = ref(30)

    const styleObject = reactive({
        color: 'red',
        fontSize: '13px'
    })

    const toggle = () => {
        fontSize.value++;
        styleObject.fontSize = parseInt(styleObject.fontSize.trimEnd('px')) + 1 + 'px'
    }
</script>

<template>
    <div class="ma-2" :style="{ color: activeColor, fontSize: fontSize + 'px' }">바인딩 #1</div>
    <div class="ma-2" :style="{ 'font-size': fontSize + 'px'}">바인딩 #2</div>
    <div class="ma-2" :style="styleObject">바인딩 #3</div>
    <v-btn @click="toggle">버튼</v-btn>
</template>

