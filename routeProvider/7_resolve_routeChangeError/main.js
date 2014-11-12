var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: "app.html",
        controller: "ViewCtrl",
        resolve: {
            loadData: viewCtrl.loadData
        }
      });
});

// we created app controller to just deal with route error
app.controller("AppCtrl", function($rootScope) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        console.log(event);
    });
});

// we refactor the old app ctrl to view ctrl
var viewCtrl = app.controller("ViewCtrl", function($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "I'm a great app!"
    };
});

// here we reject on purpose here to see what error is like
viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject("Your network is down"); // reject
    }, 500);
    return defer.promise;
};
