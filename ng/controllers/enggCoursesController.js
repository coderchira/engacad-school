(function () {
    var enggCoursesController = angular.module("myApp").controller("enggCoursesController", function ($scope) {
        console.log("inside all courses controller");
        $scope.courses = {
            course: {
                name: "VB.Net Jumpstart",
                id: "CENG1"
            }
        }
    })
})();