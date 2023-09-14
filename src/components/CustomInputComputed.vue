<script setup>
    import { computed } from 'vue'

    const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])
    const value = computed({
        get() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value)
        }
    })
</script>

<template>
    <input class="outline" v-model="value"/>
</template>

<style scoped>
    .outline {
        border-style: solid;
    }
</style>