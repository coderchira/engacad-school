/// <reference path="../views/login.html" />
(function () {
    var appRoutes = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "mainController" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "mainController" })
        .otherwise({redirectTo:"/"})
    })
})();