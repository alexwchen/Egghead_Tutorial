var app = angular.module("behaviorApp", []);


// default is restrict A
app.directive("enter", function() {
    return function(scope, element) {
        element.bind("mouseenter", function() {
            console.log("I'm inside of you!");
        });
    };
});

app.directive("leave", function() {
    return function(scope, element) {
        element.bind("mouseleave", function() {
            console.log("I'm leaving on a jet plane!");
        });
    };
});
