(function () {
  angular
    .module('app')
    .controller('LuxStateController', [
      LuxStateController
    ]);

  function LuxStateController() {
    var vm = this;

    // model to hold device name and luxValue
    vm.deviceName = null;
    vm.luxValue = 0;

    // build data for presenting chart
    lux_data = {title: vm.deviceName, lux: vm.luxValue};
    fill_data = {title: "free", lux: 1000-lux_data.lux};

    vm.data = [lux_data, fill_data];

    vm.chartOptions = {
      chart: {
        type: 'pieChart',
        duration:500,
        donut: true,
        pie: {
          width: 600,
          height: 800,
          startAngle: function (d) { return d.startAngle/2 -Math.PI/2  },
          endAngle: function (d) { return d.endAngle/2 -Math.PI/2  }
        },
        x: function (d) { return d.title;  },
        y: function (d) { return d.lux;  },
        valueFormat: (d3.format(".0f")),
        color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
        showLabels: false,
        showLegend: false,
        tooltips: false,
        title: lux_data.lux,
        titleOffset: -10
      },
      "title": {
        "enable": true,
        "text": lux_data.title,
        "className": "h4",
        "css": {
          "width": "nullpx",
          "textAlign": "center"
        }

      }

    };
  }
})();
