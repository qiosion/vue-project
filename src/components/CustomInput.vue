<script setup>
    defineProps(['modelValue'])
    defineEmits(['update:modelValue'])
</script>

<template>
    <input
        class="outline"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style scoped>
    .outline {
        border-style: solid;
    }
</style>