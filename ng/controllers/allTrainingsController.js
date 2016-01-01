(function() {
    var allTrainingsController = angular.module("myApp").controller("allTrainingsController", function ($scope) {
        console.log("inside all trainings controller");
        $scope.trainings = {
            training: {
                name: "VB.Net Jumpstart",
                id : "TENG1"
            }
        }
    })
})();