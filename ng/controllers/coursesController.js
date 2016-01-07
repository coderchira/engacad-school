(function () {
    var coursesController = angular.module("myApp").controller("coursesController", function ($scope, srvCourses) {
        console.log("inside all courses controller");
        $scope.courses = [];
        srvCourses.getAll().then(function (data) {
            $scope.courses = data;
            console.log($scope.courses);
        })
    })
})();