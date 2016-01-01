(function () {
    var mainController = angular.module("myApp").controller("mainController", function ($scope, $location) {
        $scope.messages = {message: "Welcome to the"};
        console.log($scope.messages.message);
        console.log("inside mainController");
        $scope.login = function () {
            console.log("inside login function");
            $location.url("/mycourses");
        }
    })
})();