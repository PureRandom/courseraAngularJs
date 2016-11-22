(function() {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('myFirstController', DIController);

    function DIController($scope, $filter, $injector) {
        $scope.name = 'Chris Pateman';

        $scope.upper = () => {
            const upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        // This will display all the variables passed to the method
        console.log($injector.annotate(DIController));
    }
})();
