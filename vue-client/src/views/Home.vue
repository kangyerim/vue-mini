<template>
    <div>
        <Imguploade/>
        <Footer/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Imguploade from '@//components/Imguploade.vue'

    export default {
        name: 'Home',
        components: {
            Imguploade
        }
    }
</script>
