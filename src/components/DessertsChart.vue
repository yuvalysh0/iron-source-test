<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import {mapState} from "vuex";

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
              fontColor: 'black',
              fontSize: 20,
              position: 'top',
            }
          }
        }
      };
    },

    mounted() {
      const ctx = document.getElementById('chart');
      new Chart(ctx, this.planetChartData);
    },

    created() {
      this.createChart()
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
  watch: {
    allDesserts: function () {
      const ctx = document.getElementById('chart');
      this.resetArr()
      this.createChart()
      new Chart(ctx, this.planetChartData);
    }
  },
}

</script>
