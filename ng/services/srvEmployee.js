(function () {
    var srvEmployee = angular.module("myApp").service("srvEmployee", function ($http, $q) {
        this.getAll = function () {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json";
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.employees);
            }, function (response) {
                deferred.reject({ errorMessage: "Some problem in retrieval of employee data" });
            })
            return deferred.promise;
        }
        this.ofEmpno = function (empno) { }
    })
})();