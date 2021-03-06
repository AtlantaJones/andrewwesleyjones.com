
myApp.controller('mainController', ['$scope', '$location', function ($scope, $location) {

    $scope.menuOpen = false;

    // toggle mobile menu open and closed
    $scope.toggleMenu = function() {
        var transition = ($scope.menuOpen) ? 'transition.slideLeftOut' : 'transition.slideLeftIn';
        $('nav').velocity(transition, {
            duration: 200
        });
        $scope.menuOpen = !$scope.menuOpen;
    };

    // close menu on link clicks
    $scope.closeMenu = function() {
        if($scope.menuOpen) {
            $('nav').velocity('transition.slideLeftOut', {
                duration: 200
            });
            $scope.menuOpen = false;
        }
    }
}]);



