(function() {
    'use strict';

    angular.module('myFirstApp', [])
    // Can pass over a function/callback or an array of strings, which are the variable that wil get passed over and then the method at the end.
        .controller('myFirstController', ['$scope', '$filter', '$injector', DIController]);

    // If you don't use the array method above, you can also inject the variables like..
    DIController.$inject = ['$scope', '$filter'];

    function DIController($scope, $filter, $injector) {
        $scope.name = 'Chris Pateman';

        $scope.upper = () => {
            const upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        // This will display all the variables passed to the method
        // console.log($injector.annotate(DIController));
    }
})();
