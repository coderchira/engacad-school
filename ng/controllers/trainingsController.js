(function() {
    var trainingsController = angular.module("myApp").controller("trainingsController", function ($scope) {
        console.log("inside all trainings controller");
        $scope.trainings = {
            training: {
                name: "VB.Net Jumpstart",
                id : "TENG1"
            }
        }
    })
})();