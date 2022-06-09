<template>
  <div class="com-container">
    <div class="com-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: {}
    }
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.trend_ref, 'chalk')
      const initOption = {}
      this.chartInstance.setOption(initOption)
    },
    async getData() {
      const res = await this.$API.trend.reqGetTrendData()
      this.allData = res
      this.updateChart()
    },
    updateChart() {
      const dataOptions = {}
      this.chartInstance.setOption(dataOptions)
    },
    screenAdapter() {
      // 浏览器窗口发送变化调用
      this.titleFontSize = (this.$refs.trend_ref.offsetWidth / 100) * 3.6
      const adapter = {}
      this.chartInstance.setOption(adapter)
      this.chartInstance.resize()
    }
  },
  destroyed() {
    clearInterval(this.timer)
    window.removeEventListener('resize', this.screenAdapter)
  }
}
</script>
