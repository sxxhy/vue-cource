<template>
    <div>
      {{ $route.params.name }}
    </div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: [String, Number], // 数据类型
      default: '伤心小虎牙'// 默认的内容
    }
  }
}
</script>

<style scoped>

</style>
