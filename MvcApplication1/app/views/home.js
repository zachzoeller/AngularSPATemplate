(function () {
    'use strict';
    var controllerId = 'home';
    angular.module('app').controller(controllerId, [
        '$rootScope', '$scope', 'logger', function ($rootScope, $scope, logger) {

            $scope.showToastr = showToastr;
            
            activate();

            function activate() {               
            }

            function showToastr() {                
                logger.logWarning('This is a Toastr warning', null, null, true);
            }
        }
    ]);
})();