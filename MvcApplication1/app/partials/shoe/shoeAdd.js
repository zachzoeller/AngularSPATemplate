(function () {
    'use strict';
    var controllerId = 'shoeAdd';
    angular.module('app').controller(controllerId, [
        '$modalInstance', '$q', '$scope', 'model', function ($modalInstance, $q, $scope, model) {

            $scope.activated = false;
            $scope.title = model.title;
            $scope.shoe = model.shoe;
            
            $scope.save = save;
            $scope.cancel = cancel;

            activate();

            function activate() {
                $scope.activated = true;                
            }

           
            function save() {
                $modalInstance.dismiss('cancel');
            };

            function cancel() {
                $modalInstance.dismiss('cancel');
            };
        }
    ]);
})();