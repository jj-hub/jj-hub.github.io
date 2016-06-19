var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('v/view_1').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'price_new';
});
