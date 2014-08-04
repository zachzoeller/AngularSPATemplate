(function () {
    'use strict';
    var serviceId = 'data';
    angular.module('app').factory(serviceId, [
        '$http', '$timeout', '$q', '$rootScope', 'promiseTracker', function ($http, $timeout, $q, $rootScope, promiseTracker) {

            var service = {
                getShoes: getShoes
            };

            return service;

            function getShoes() {
                var deferred = $q.defer();

                var shoes = [
                    {
                        name: "Red Shoe",
                        size: "10.5",
                        price: "$100"
                    },
                    {
                        name: "Blue Shoe",
                        size: "14.5",
                        price: "$50"
                    },
                    {
                        name: "Blue Shoe",
                        size: "14.5",
                        price: "$50"
                    }
                ];

                // timeout used to imitate a async call
                $timeout(function () {
                    deferred.resolve(shoes);
                }, 1000);

                // this is used to trigger the hide/show on the spinner
                $rootScope.loadingTracker.addPromise(deferred.promise);
                
                return deferred.promise;
            }           
        }
    ]);
})();