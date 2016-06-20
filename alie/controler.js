var poogleApp = angular.module('poogleApp', ["ngSanitize"]);

poogleApp.controller('PoogleCtrl', function ($scope, $http) {
  $http.get('v/view_1').success(function(data) {
    $scope.data = data;
  });

  $scope.orderProp = 'price_new';
});
