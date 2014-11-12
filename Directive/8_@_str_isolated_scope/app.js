var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry";
});

app.directive("drink", function() {
    return {
        scope: {
            flavor: "@" // will pass in as a string, nothing else
        },
        template: '<div>{{flavor}}</div>'
    };
});
