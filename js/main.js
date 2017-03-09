
var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'pages/home.html'
        })

        .state('frontend', {
            url: '/frontend',
            templateUrl: 'pages/frontend.html'
        })



});


myApp.animation('.page-container', [function() {
    return {
        enter: function(element, doneFn) {
            console.log('enter');

                $(element).velocity("transition.slideRightIn", {
                    complete: function() {
                        setTimeout(doneFn, 600);
                    },
                    duration: 500
                });

            // remember to call doneFn so that AngularJS
            // knows that the animation has concluded
        },

        move: function(element, doneFn) {
            console.log('move');
        },

        leave: function(element, doneFn) {
            console.log('leave');
            $(element).velocity('transition.slideLeftOut', {
                complete: doneFn,
                duration: 200
            });
        }
    }
}]);
