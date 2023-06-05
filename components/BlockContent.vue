<script lang="ts">
export default {
    name: 'BlockContent',
    props: {
        blocks: {
            type: Array,
            required: true,
        },
    },
};
</script>

<template>
    <SanityContent :blocks="blocks" />
</template>