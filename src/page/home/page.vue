<template>
   <Page
    :className="className"
    :total="total"
    :current="current"
    :pageSize="pageSize"
    :pageSizeOpts="pageSizeOpts"
    :placement="placement"
    :size="size"
    :simple="simple"
    :showTotal="showTotal"
    :showElevator="showElevator"
    :showSizer="showSizer"
    :styles="styles"
   >
  </Page>
</template>

<script>
import Page from 'iview/src/components/page'
import 'iview/dist/styles/iview.css'
export default {
  props: {
    current: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    pageSizeOpts: { default: () => [10, 20, 30, 40] },
    placement: { default: 'bottom' },
    size: { default: undefined },
    simple: { default: false },
    showTotal: { default: false },
    showElevator: { default: true },
    showSizer: { default: false },
    className: { default: 'zpfe' },
    styles: { default: () => { } }
  },
  data() {
    return {
    }
  },
  components: {
    Page
  },
  created() {
  },
  methods: {
  }
}
</script>
<style lang="less">
@import "./iview-rewrite.less";
</style>
