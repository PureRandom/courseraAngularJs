(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', checkList);

    checkList.$inject = ['$scope'];

    function checkList($scope) {
        $scope.listInput = '';
        $scope.message = '';

        $scope.listCheck = () => {
            let listItems = $scope.listInput.split(',').filter(n => n !== undefined && n !== '');
            let status = false;
            if (listItems.length === 0) {
                $scope.message = 'Please enter data first';
            } else if (listItems.length <= 3) {
                $scope.message = 'Enjoy!';
                status = true;
            } else if (listItems.length > 3) {
                $scope.message = 'Too much!';
                status = true;
            } else {
                $scope.message = '';
            }
            status ? $scope.statusColor = 'green' : $scope.statusColor = 'red';
        };
        
    }
})();
