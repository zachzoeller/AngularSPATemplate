(function () {
    'use strict';
    angular.module('app', [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ui.bootstrap',
         'ajoslin.promise-tracker'
    ]).run([
        '$q', '$route','$rootScope', 'promiseTracker', function ($q, $route, $rootScope, promiseTracker) {           
            $rootScope.loadingTracker = promiseTracker.register("busyTracker");
        }
    ]);
})();