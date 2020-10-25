<template>
    <div>
        <h1>img uploader</h1>
        <input type="file" @change="onChangeImages" data-buttonText="label"/>
        <img :src="imgUrl" class="imgForm"/>
        <button type="button" @click="onUpload">피드 업로드</button>
        <h1>img feed</h1>
        <template>
            <div v-for="item in getFeeds" :key="item">
                <img :src="item" class="feedForm"/>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'img-uploader',
        data: () => ({
            imgUrl: null,
        }),
        methods: {
            ...mapActions('instagram', ['uploadFeed']),
            onChangeImages(e) {
                console.log(e.target.files)
                const file = e.target.files[0]
                this.imgUrl = URL.createObjectURL(file)
            },
            onUpload() {
                this.uploadFeed(this.imgUrl)
                this.imgUrl = null
            }
        },
        computed: {
            ...mapGetters('instagram', ['getFeeds'])
        }
    }
</script>

<style>
    .imgForm {
        width: 250px;
        height: 250px;
        border: blue solid 5px;
    }

    .feedForm {
        width: 100px;
        border: violet solid 5px;
    }
</style>