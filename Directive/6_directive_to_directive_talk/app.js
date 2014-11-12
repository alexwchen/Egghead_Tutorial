var app = angular.module("superApp", []);


// first directive
app.directive("superhero", function() {
    return {
        restrict: "E",
        scope: {}, // isolated scope, otherwise they will all share one scope, and all the variable will be overwrite

        controller: function($scope) {
        $scope.abilities = [];

        // we want other directives to call these functions
        this.addStrength = function() {
            $scope.abilities.push("strength");
        };

        // we want other directives to call these functions
        this.addSpeed = function() {
            $scope.abilities.push("speed");
        };

        // we want other directives to call these functions
        this.addFlight = function() {
            $scope.abilities.push("flight");
        };
    },

    link: function(scope, element) {
        element.addClass("button");
        element.bind("mouseenter", function() {
            console.log(scope.abilities);
        });
    }
  };
});



app.directive("strength", function() {
    return {
        require: "superhero", // decide which directive do we want to call
        link: function(scope, element, attrs, superheroCtrl) { // access its controller
            superheroCtrl.addStrength();
        }
    };
});

app.directive("speed", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    };
});

app.directive("flight", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    };
});
