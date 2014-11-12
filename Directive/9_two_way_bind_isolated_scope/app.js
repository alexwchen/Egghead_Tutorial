var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry";
});

app.directive("drink", function() {
    return {
        scope: {
            flavor: "=" // 2 way binding, now we pass in the whole variable, it will just use it as it is
        },
        template: '<input type="text" ng-model="flavor">'
    };
});
