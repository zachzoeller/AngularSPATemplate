(function () {
    'use strict';
    var controllerId = 'shoeAdd';
    angular
        .module('app')
        .controller('shoeAdd', ['$modalInstance', '$q', '$scope', 'model', shoeAdd]);

    function shoeAdd ($modalInstance, $q, $scope, model) {

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
})();