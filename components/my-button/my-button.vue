<template>
    <div class="m-1">
        <!-- Styling not working with computed properties or if I do :class="['bg-' + variant]" -->
        <button :class="[buttonClasses]">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts" src="./my-button.ts"></script>
<style lang="scss" src="./my-button.scss" scoped></style>
