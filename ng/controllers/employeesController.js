(function () {
    var employeesController = angular.module("myApp").controller("employeesController", function ($scope, srvEmployee) {
        console.log("inside employeesController");
        $scope.employees = [];      
            srvEmployee.getAll().then(function (data) {
                console.log("inside getAll");
                $scope.employees = data;
                console.log($scope.employees);
            })
       
       
    })
})();