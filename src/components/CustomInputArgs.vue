<script setup>
    
    defineProps(['firstName', 'lastName', 'middleName'])
    const emit = defineEmits(['update:firstName', 'update:lastName', 'update:middleName'])
    
    import { ref, watch } from 'vue'
    const innerMiddleName = ref('')

    watch(innerMiddleName, (x) => {
        emit('update:middleName', x)
    })
    
</script>
<template>
    <v-card>
        <label>firstName</label>
        <input
            class="outline"
            type="text"
            :value="firstName"
            @input="$emit('update:firstName', $event.target.value)"
        />

        <v-divider></v-divider>

        <label>middleName {{ middleName }}</label>
        <input
            class="outline"
            type="text"
            v-model="innerMiddleName"
        />
        
        <v-divider></v-divider>

        <label>lastName</label>
        <input
            class="outline"
            type="text"
            :value="lastName"
            @input="$emit('update:lastName', $event.target.value)"
        />
    </v-card>
</template>

<style scoped>
    .outline {
        border-style: solid;
        margin: 4px;
    }
</style>