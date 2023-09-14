<script setup>
	defineProps(['title']) // import 하지 않아도 사용가능 매크로
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                블로그 제목
            </v-col>
            <v-col>
                {{ title }}
            </v-col>
        </v-row>
    </v-container>
</template>