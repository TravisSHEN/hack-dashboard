(function () {
  angular
    .module('app')
    .controller('HistoricalController', [
      'historicalDataService', '$q',
      HistoricalController
    ]);

  function HistoricalController(historicalDataService, $q) {
    var vm = this;

    vm.chartOptions = {
      chart: {
        type: 'cumulativeLineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 65

        },
        x: function(d){ return d[0];  },
        y: function(d){ return d[1];  },
        //average: function(d) { return d.mean;  },

        color: d3.scale.category10().range(),
        duration: 300,
        useInteractiveGuideline: true,
        clipVoronoi: false,

        xAxis: {
          axisLabel: 'Date',
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))

          },
          showMaxMin: false,
          staggerLabels: true,
          axisLabelDistance: 200,

        },

        yAxis: {
          axisLabel: 'Lux Level',
          tickFormat: function(d){
            return d3.format(',.2r')(d);

          },
          axisLabelDistance: 0

        }

      }

    };


    vm.performanceChartData = [];
    vm.performancePeriod = 'week';
    vm.changePeriod = changePeriod;

    activate();

    function activate() {
      var queries = [loadData()];
      $q.all(queries);
    }


    function loadData() {
      vm.performanceChartData = historicalDataService.getData();
    }

    function changePeriod() {
      loadData();
    }
  }
})();
