<template>
  <div class="zpfe-iview-date-picker" :className="className">
    <DatePicker
    :open="false"
    :value="Date.now()"
    confirm type="year"
    placeholder="Select year"
    style="width: 200px">
    <slot></slot>
    </DatePicker>
  </div>
</template>

<script>
import DatePicker from 'iview/src/components/date-picker'
export default {
  props: {
    className: { default: '' }
  },
  data() {
    return {
      visible: this.$props.value
    }
  },
  watch: {
    value(newValue) {
      this.$data.visible = newValue
    },
    visible(newValue) {
      this.$emit('input', newValue)
    }
  },
  components: {
    DatePicker
  },
  methods: {

  }
}
</script>
<style lang="less">
.zpfe-iview-date-picker {
  .ivu-date-picker-prev-btn-arrow-double,
  .ivu-date-picker-next-btn-arrow-double {
    i {
      font-weight: bold;
    }
  }
  .ivu-date-picker-prev-btn-arrow-double i:before {
    content: "";
  }
  .ivu-date-picker-prev-btn-arrow-double i:after {
    content: "<";
  }
  .ivu-date-picker-next-btn-arrow-double i:before {
    content: "";
  }
  .ivu-date-picker-next-btn-arrow-double i:after {
    content: ">";
  }
  .ivu-input-icon-normal + .ivu-input {
    border-radius: 0px;
    // border-bottom: none;
  }
  .ivu-date-picker-rel {
    z-index: 20;
  }
  .ivu-date-picker .ivu-select-dropdown {
    z-index: 10;
    top: 70px;
  }
  .ivu-input {
    border-radius: 0px;
  }
}
</style>
