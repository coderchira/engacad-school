/// <reference path="../views/login.html" />
(function () {
    var appRoutes = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "loginController" })
        .when("/employees/id/courses", { templateUrl: "ng/views/mycourses.html", controller: "empCoursesController" })
        .when("/courses", { templateUrl: "ng/views/enggcourses.html", controller: "coursesController" })
        .when("/courses/id/trainings", { templateUrl: "ng/views/alltrainings.html", controller: "trainingsController" })
        .otherwise({ redirectTo: "/" })
    })
})();