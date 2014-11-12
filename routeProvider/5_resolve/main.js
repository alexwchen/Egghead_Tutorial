var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: "view/app.html",
        controller: "AppCtrl",

        // things needs to happen before the page load, the page will be waiting for resolve
        resolve: {
            app: function($q, $timeout) {
                var defer = $q.defer();
                $timeout(function() {
                    defer.resolve(); // if we didn't call resolve, the page won't load
                }, 2000);
                return defer.promise;
            }
        }
      });
});

app.controller("AppCtrl", function($scope, $q) {
    $scope.model = {
        message: "I'm a great app!!!"
    };
});
