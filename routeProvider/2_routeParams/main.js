var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/map/:country/:state/:city',
      {
        templateUrl: "app.html",
        controller: "AppCtrl"
      }).otherwise({
        template: "doesn't exist"
      });

});

app.controller("AppCtrl", function($scope, $routeParams) {

    $scope.model = {
        message: "Address: " +
          $routeParams.country + ", " +
          $routeParams.state + ", " +
          $routeParams.city + ", "
    };
});
