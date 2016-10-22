(function() {
    'use strict';

    angular
        .module('app')
        .directive('messagesSection', messagesSectionDirective);

    function messagesSectionDirective() {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                theme: '@',
                messages: '='
            },
            template: '' +
                      '<section>' +
                      '  <md-subheader ng-class="theme">{{title}}</md-subheader>' +
                      '  <md-list>' +
                      '    <md-list-item class="md-3-line" ng-repeat="message in messages">' +
                      '    <img class="md-avatar" ng-src="assets/images/einstein.jpg">' +
                      '    <div class="md-list-item-text">' +
                      '      <h3>{{message.areaName}}</h3>' +
                      '      <p>{{message.text}}</p>' +
                      '    </div>' +
                      '    <md-divider/>' +
                      '    </md-list-item>' +
                      '  </md-list>' +
                      '</section>',
            link : function(scope, element, attrs) {
            }
        };
    }
})();
