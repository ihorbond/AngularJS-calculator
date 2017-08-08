const calc = angular.module("calculator", []);
calc.controller("myCtrl", $scope => {
  $scope.hello = "Hello World";
  $scope.displayValue = "0";
});
