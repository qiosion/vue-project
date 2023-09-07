<script setup>
    import { ref, reactive } from 'vue'

    let itemList = [...Array(8).keys()].map(i => {
                    return { title: `title${i}`,
                            subtitle: `subtitle${i}`}
    })
    const items = reactive(itemList)
</script>

<template>
    <v-app>
        <v-app-bar>
            <v-btn variant="text" icon="mdi-menu"></v-btn>
            <v-toolbar-title>Cards</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn variant="text" icon="mdi-magnify"></v-btn>
        </v-app-bar>

        <v-main>
            <v-card v-for="item in items" class="ma-4">
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle v-html="item.subtitle"></v-card-subtitle>
            </v-card>
        </v-main>
    </v-app>
</template>