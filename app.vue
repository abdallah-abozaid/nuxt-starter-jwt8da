<template>
    <div class="flex p-3">
        <my-button variant="green-20"> Hello </my-button>
        <my-button> Hello </my-button>
    </div>
</template>

<script setup lang="ts">
import tailwindConfig from '#tailwind-config';
console.log(tailwindConfig.theme.colors);
</script>
