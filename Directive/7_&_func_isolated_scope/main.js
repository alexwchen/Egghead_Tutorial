var app = angular.module("choreApp", []);

app.controller("ChoreCtrl", function($scope) {
    $scope.logChore = function(chore) {
        alert(chore + " is done!");
    };
});

app.directive("kid", function() {
    return {
        restrict: "E",
        scope: {
            done: "&" // this makes the done varialbe just like the function it passes in
        },
        template: '<input type="text" ng-model="chore">' +
          ' {{chore}}' +
          ' <div class="button" ng-click="done({chore:chore})">I\'m done!</div>' // chore:chore (first one is param name, second one is the value we are passing in)
    };
});
