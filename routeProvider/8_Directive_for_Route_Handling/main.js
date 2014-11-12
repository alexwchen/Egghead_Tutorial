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

app.directive("error", function($rootScope) {
    return {
        restrict: "E",
        template: '<div class="alert-box alert" ng-show="isError">Error!!!!</div>',

        // this is like the controller for the directive
        link: function(scope) {

            // listening to route error, and trigger to show the directive
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
                scope.isError = true;
            });
        }
    };
});


// app ctrl listening to route erro
app.controller("AppCtrl", function($rootScope) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        console.log(event);
    });
});

var viewCtrl = app.controller("ViewCtrl", function($scope, $route) {
    $scope.model = {
        message: "I'm a great app!"
    };
});

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject("Your network is down");
    }, 500);
    return defer.promise;
};
