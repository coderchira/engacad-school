(function () {
    var mainController = angular.module("myApp").controller("mainController", function ($scope) {
        $scope.messages = {message: "Welcome to the"};
        console.log($scope.messages.message);
        console.log("inside mainController");
    })
})();