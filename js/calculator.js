angular.module("calculator")
       .controller("calcCtrl", () => {
  let scope = this;
  scope.displayValue = "0";
  scope.message = "Hello World";
  scope.numpad = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  scope.operations = ['mr', 'x', '/', 'mc', '-', '+', 'm+',  '%', '=', 'm-', 'AC'];
  scope.decimalPoint = false; //was decimal point clicked?
  scope.clicked = false;
  scope.num = value => {
        // scope.displayValue = "";
        scope.displayValue += value;
    };
  scope.operation = value => {
    switch (value) {

      case "AC":
      scope.displayValue = 0;
      break;

      case "mc":
      $http({
      method: 'DELETE',
      url: 'http://localhost:3000/mc'
      }).then(function successCallback(res) {
      scope.displayValue = res.message;
      }, function errorCallback(res) {
      scope.message = res;
      });
      break;

      case "mr":
      $http({
      method: 'GET',
      url: 'http://localhost:3000/memory'
      }).then(function successCallback(res) {
      scope.displayValue = res;
      }, function errorCallback(res) {
      scope.message = res;
      });
      break;

      case "m+":
      $http({
      method: 'POST',
      url: 'http://localhost:3000/mplus'
      }).then(function successCallback(res) {
        scope.message = res.message;
      }, function errorCallback(res) {
       scope.message = res;
      });
      break;

      case "m-":
      $http({
      method: 'PUT',
      url: 'http://localhost:3000/mminus'
      }).then(function successCallback(res) {
        scope.message = res.message;
      }, function errorCallback(res) {
       scope.message = res;
      });
      break;
    }
  };
});
