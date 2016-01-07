(function () {
    var srvCourses = angular.module("myApp").service("srvCourses", function ($http,$q) {
        this.getAll = function () {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/courses.json";
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.courses);
            }, function (response) {
                deferred.reject({ errorMessage: "courses data couldn't be retrieved" })
            })
            return deferred.promise;
        }
    })
})();