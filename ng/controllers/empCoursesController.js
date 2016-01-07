(function () {
    var empCoursesController = angular.module("myApp").controller("empCoursesController", function ($scope) {
        console.log("inside empCoursesController");
        $scope.courses =
            [
                { name: "VB.Net Jumpstart", id: "CENG1" },
                { name: "CATIA V5VBA", id: "CENG2" }
            ];
        
    })
})();