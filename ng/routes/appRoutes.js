/// <reference path="../views/login.html" />
(function () {
    var appRoutes = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "mainController" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "mainController" })
        .when("/mycourses", { templateUrl: "ng/views/mycourses.html", controller: "myCoursesController" })
        .when("/enggcourses", { templateUrl: "ng/views/enggcourses.html", controller: "enggCoursesController" })
        .when("/alltrainings", { templateUrl: "ng/views/alltrainings.html", controller: "allTrainingsController" })
        .otherwise({ redirectTo: "/" })
    })
})();