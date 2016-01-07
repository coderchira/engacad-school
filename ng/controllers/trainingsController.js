(function () {
    var trainingsController = angular.module("myApp").controller("trainingsController", function ($scope, srvCourse) {
        console.log("inside trainingsController");
        $scope.courses = [];
        $scope.trainings = [];
        // use srvCourse to retrieve the course ID , Name and Training session ID
        srvCourse.getAll().then(function (data) {
            $scope.courses = data;
            console.log($scope.courses);
        })
    })
})();