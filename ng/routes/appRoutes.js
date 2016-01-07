/// <reference path="../views/login.html" />
(function () {
    var appRoutes = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "loginController" })
        .when("/employees/id/courses", { templateUrl: "ng/views/empcourses.html", controller: "empCoursesController" })
        .when("/employees", { templateUrl: "/ng/views/employees.html", controller: "employeesController" })
        .when("/courses", { templateUrl: "ng/views/courses.html", controller: "coursesController" })
        .when("/courses/id/trainings", { templateUrl: "ng/views/trainings.html", controller: "trainingsController" })
        .otherwise({ redirectTo: "/" })
    })
})();