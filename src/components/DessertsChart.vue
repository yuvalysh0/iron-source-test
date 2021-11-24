<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import {mapState} from "vuex";
const ctx = document.getElementById('chart');

export default {
  components: {},
  data() {
    return {
      planetChartData: {},
      data: [],
      labelArr: [],
      amount: [],
      colors: []
    }
  },

  methods: {
    createChart() {
      this.getData()
      const data = {
        labels: this.labelArr,
        datasets: [{
          data: this.amount,
          backgroundColor: this.colors
        }],
      };

      this.planetChartData = {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          }
        }
      };
    },

    mounted() {
      new Chart(ctx, this.planetChartData);
    },

    getData() {
      for (let dessert of this.allDesserts) {
        this.labelArr.push(dessert.dessertName)
        this.amount.push(dessert.dessertAmount)
        this.colors.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16))
      }
    },

    resetArr() {
      this.labelArr = [];
      this.amount = [];
    }

  },
  computed: {
    ...mapState('deserts', ['allDesserts'])
  },
  created() {
    this.createChart()
  },

  watch: {
    allDesserts: function (newVal) {
      this.createChart()
      this.resetArr()
      new Chart(ctx, this.planetChartData);
    }
  },
}

</script>
