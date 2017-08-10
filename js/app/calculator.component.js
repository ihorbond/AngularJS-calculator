angular.module("calculator")
       .component("calcBody", {
         template:
         `<div id="calc-body">
            <p id="message">{{$ctrl.message}}</p>
           <div id="display">{{$ctrl.displayValue}}</div>

           <section id="num-pad">
             <button ng-repeat="oneNum in $ctrl.numpad" ng-click="$ctrl.num(oneNum)" id="num{{oneNum}}">
               {{oneNum}}
             </button>
           </section>

           <section id="operations">
             <button ng-repeat="oneOperation in $ctrl.operations" ng-click="$ctrl.operation(oneOperation)" id="operation{{oneOperation}}">
               {{oneOperation}}
             </button>
           </section>

         </div>`,
         controller: function calcController() {

           let scope = this;
           scope.displayValue = "0";
           scope.message = "Hello World";
           scope.numpad = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
           scope.operations = ['mr', 'x', '/', 'mc', '-', '+', 'm+',  '%', '=', 'm-', 'AC'];
           scope.decimalPoint = false; //was decimal point clicked?
           scope.clicked = false;
           scope.num = value => {
                 if(scope.displayValue === "0") {
                   scope.displayValue = "";
                 }
                 scope.displayValue += value.toString();
             };
           scope.operation = value => {
             switch (value) {

               case "AC":
               scope.displayValue = "0";
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

         }

});
