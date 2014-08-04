(function () {
    'use strict';
    var controllerId = 'shoeList';
    angular.module('app').controller(controllerId, [
        '$location', '$q', '$scope', '$timeout', '$modal', '$rootScope', 'promiseTracker', 'data', function ($location, $q, $scope, $timeout, $modal, $rootScope, promiseTracker, data) {

            // properties
            $scope.shoes = [];
            $scope.title = 'Shoe List';
          
            //methods
            $scope.addShoe = addShoe;
            activate();

            function activate() {                
                getShoes().then(function() {
                    $scope.activated = true;                                        
                });                
            }
           
            function getShoes() {
                return data.getShoes().then(function (shoes) {
                    $scope.shoes = shoes;
                });                
            }

            function addShoe() {
                var shoe = {name: '', price: 0, size: 0};

                var model = {
                    title: 'New Shoe',
                    shoe: shoe
                };
                var modalInstance = $modal.open({
                    backdrop: 'static',
                    controller: 'shoeAdd',
                    resolve: {
                        model: function () {
                            return model;
                        }
                    },
                    templateUrl: 'app/partials/shoe/shoeAdd.html',
                    windowClass: 'modal-wide'
                });

                modalInstance.result.then(function (savedShoe) {
                    
                }, function () {
                    
                    //common.logger.log('Add cancelled at: ' + new Date());
                });
            }

        }
    ]);
})();