(function () {
  angular
    .module('app')
    .controller('DashboardController', [
      'dashboardService',
      '$log',
      DashboardController
    ]);

  function DashboardController(dashboardService, $log) {
    var vm = this;

    vm.deviceLuxData = dashboardService.getDeviceLuxData().loadAllItems();
    $log.log(vm.deviceLuxData);
  }
})();
