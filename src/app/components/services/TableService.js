(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        device: "JunMin's Phone",
        area: 'Board Room',
        lux: 100,
        status: 'Activated',
        class: 'md-accent'
      },
      {
        device: "JunMin's Phone",
        area: 'Living Room',
        lux: 40,
        status: 'Sleep',
        class: ''
      },
      {
        device: "JunMin's Phone",
        area: 'Meeting Room',
        lux: 76,
        status: 'Activated',
        class: 'md-accent'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
