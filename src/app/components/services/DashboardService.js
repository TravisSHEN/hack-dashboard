(function(){
  'use strict';

  angular.module('app')
    .service('dashboardService', [
      dashboardService
    ]);

  function dashboardService() {

    var service = {
      getDeviceLuxData: getDeviceLuxData
    };

    return service;

    function getDeviceLuxData() {

      var data = [
        {device: 'T Iphone', lux: 60},
        {device: 'JunMin Phone', lux: 120}
      ]

      return {
        loadAllItems : function() {
          return data;
        }
      };

    }
  }

})();
