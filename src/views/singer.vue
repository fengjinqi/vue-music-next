<template>
    <div class="singer" v-loading="!singers.length">
        <index-list
                :data="singers"
                @select="selectSinger"
        ></index-list>
 <!--       <router-view v-slot="{ Component }">
            <transition appear name="slide">
                <component :is="Component" :data="selectedSinger"/>
            </transition>
        </router-view>-->
    </div>
</template>

<script>

    import {getSingerList} from "@/service/singer";

    import IndexList from '@/components/index-list/index-list'

    export default {
        name: "singer",
        data() {
            return {
                singers: [],
                selectedSinger: null
            }
        },
        components: {
            IndexList
        },
        async created() {
            let result = await getSingerList()
            console.log(result)
            this.singers = result.singers
        }
    }
</script>

<style lang="scss" scoped>
    .singer {
        position: fixed;
        width: 100%;
        top: 88px;
        bottom: 0;
    }
</style>
