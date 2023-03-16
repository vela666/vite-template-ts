<template>
  <div>
    <el-button @click="test" ref="target">点击显示弹窗</el-button>
    <div ref="popup" class="popup">
      <div class="arrow" ref="arrowRef">∨</div>
      <div class="content" ref="cRef">这是弹窗内容</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import type { Ref } from 'vue'
import { computePosition, arrow, autoPlacement } from '@floating-ui/dom'
import { ElMessage } from 'element-plus'
const target = ref()
const popup = ref()
const arrowRef = ref()
const cRef: Ref<HTMLElement | null> = ref(null)
const test = () => {
  ElMessage.warning('111')
}

nextTick(() => {
  computePosition(target.value.ref, cRef.value!, {
    placement: 'top',
    middleware: [autoPlacement(), arrow({ element: arrowRef.value })],
  }).then(({ x, y }) => {
    console.log(x, y)
  })
})
</script>

<style></style>
