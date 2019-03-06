<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('repalce')">替换到parent</button>
    <p>{{ food }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  methods: {
    handleClick (type) {
      // 编程式跳转
      // this.$router.go(-1)
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        // this.$router.push({ // 带有?号的路由
        //   name: 'parent',
        //   query: {
        //     name: '伤心小虎牙'
        //   }
        // })
        // const name = '伤心小虎牙'
        // this.$router.push({
        //   path: `/argu/${name}`
        // })
        this.$router.push({
          name: 'argu',
          params: {
            name: '伤心小虎牙'
          }
        })
      } else if (type === 'repalce') {
        // 替换当前路径点击后退时反回到替换前页面的上一个页面
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
