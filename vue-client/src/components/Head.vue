<template>
    <div>
        <Title/>
        <tag/>
    </div>
</template>

<script>
    import Title from '@/components/layouts/Title.vue'
    import Tag from '@/components/layouts/Tag.vue'

    export default {
        name: 'Head',
        components: {
            Title,
            'tag': Tag
        }
    }
</script>

<style></style>