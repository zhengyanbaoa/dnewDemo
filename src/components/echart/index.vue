<template>
  <div>
    <div class="main-chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      option: {
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption(this.option);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-chart {
  width: 300px;
  height: 300px;
}
</style>