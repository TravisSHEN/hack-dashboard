(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        areaPhoto : '/assets/images/user.svg',
        areaName: 'Living Room',
        text: 'Turn off the light!'
      },
      {
        userPhoto : '/assets/images/user.svg',
        areaName: 'Meeting Room',
        text: 'Turn off the light!'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
