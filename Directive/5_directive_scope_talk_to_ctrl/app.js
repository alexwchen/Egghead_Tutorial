var app = angular.module("twitterApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.loadMoreTweets = function() {
        alert("Loading tweets!");
    };

    $scope.deleteTweets = function() {
        alert("deleting tweets");
    };
});

app.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {


            // take the attr value in
            // and will just run it like a function, in the same scope
            scope.$apply(attrs.enter);


        });
    };
});
