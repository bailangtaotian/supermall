<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- 3.最好都是将slot里面动态的东西全部用div嵌套的东西进行修改，防止替换的时候失去效果 -->
      <!-- <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot> -->
      <div v-if="!isActive">
          <slot name="item-icon"></slot>
      </div>
      <div v-else>
          <slot name="item-icon-active"></slot>
      </div>
      <!-- 1.在插槽中写动态class是不起作用的，因为最终会被App中的“<div slot="item-text">首页</div>”动态替换，替换成科没有class的标签 -->
      <!-- <slot :class="{active: isActive}" name="item-text"></slot> -->
      <!-- 2.解决方案是在外层嵌套一个div标签,在里面写:class="{active: isActive}" -->
      <!-- 3.如果是以props形式动态决定要显示的活跃颜色，就不能这样写了,需要使用动态绑定样式 -->
      <!-- <div :class="{active: isActive}">
        <slot name="item-text"></slot>
      </div> -->
      <!-- 4.需要使用：style，抽取出来，在外面写上computed属性 -->
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props :{
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data () {
        return {
            //5.这里需要动态传入，决定单签点击的活跃，使用计算属性
        //    isActive: true 
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            //4.点击后进行路由的跳转,具体要跳到哪里，需要让用户在使用组件的时候，通过props属性传过来
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;  /* 对tab-bar-itme 均等分 */
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;  
    margin-bottom: 2px;
  }
  /* 6.激活颜色需要动态决定，使用props传入 */
  /* .active {
      color: red;
  } */
</style>