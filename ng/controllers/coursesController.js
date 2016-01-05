(function () {
    var coursesController = angular.module("myApp").controller("coursesController", function ($scope) {
        console.log("inside all courses controller");
        $scope.courses = {
            course: {
                name: "VB.Net Jumpstart",
                id: "CENG1"
            }
        }
    })
})();