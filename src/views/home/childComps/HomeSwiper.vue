<template>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
      </swiper-item>
    </swiper>
</template>

<script>
//swiper中index.js导出的对象，可以用下面的方式导入对象的属性Swiper,SwiperItem
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>