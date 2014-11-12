var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: "view/app.html",
        controller: "AppCtrl",
        resolve: {
            loadData: appCtrl.loadData, // <- will return what has been resolved, if we check route in browser console we will see "loaddata"
            prepData: appCtrl.prepData  // <- will return what has been resolved, if we check route in browser console we will see "prepdata"
        }
      });
});

var appCtrl = app.controller("AppCtrl", function($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "I'm a great app!"
    };
});

appCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve("loadData");
    }, 2000);
    return defer.promise;
};

appCtrl.prepData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve("prepData");
    }, 2000);
    return defer.promise;
};
