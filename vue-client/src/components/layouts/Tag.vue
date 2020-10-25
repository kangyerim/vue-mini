<template>
    <div>
        <label v-for="item in options" :key="item.value">
            <input type="radio" name="label">
            {{item.label}}
        </label>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
        data: function () {
            return {
                options: [
                    {value: -1, label: '전체'},
                    {value: 0, label: '작업중'},
                    {value: 1, label: '완료'},
                ]
            }

        }
    }
</script>

<style></style>