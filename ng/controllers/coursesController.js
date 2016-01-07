(function () {
    var coursesController = angular.module("myApp").controller("coursesController", function ($scope, srvCourse) {
        console.log("inside coursesController");
        $scope.courses = [];
        srvCourse.getAll().then(function (data) {
            $scope.courses = data;
            console.log($scope.courses);
        })
    })
})();