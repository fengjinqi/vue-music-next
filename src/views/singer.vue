<template>
    <div>singer</div>
</template>

<script>

    import {getSingerList} from "@/service/singer";

    export default {
        name: "singer",
        data() {
            return {
                singers: [],
                selectedSinger: null
            }
        },
        async created() {
            let result = await getSingerList()
            console.log(result)
            this.singers = result.singers
        }
    }
</script>

<style scoped>

</style>
