(() => {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['userService', '$filter'];
    function SignUpController(userService, $filter) {
        const ctrl = this;
        ctrl.validShortName = 'unset';

        ctrl.submitData = (formData) => {
            const userDetails = {
                firstName: formData.firstName.$viewValue,
                lastName: formData.lastName.$viewValue,
                emailAddress: formData.emailAddress.$viewValue,
                phoneNumber: formData.phoneNumber.$viewValue,
                favoriteItem: {
                    shortName: $filter('uppercase')(formData.shortName.$viewValue),
                },
            };

            userService.addUser(userDetails).then((data) => {
                ctrl.validShortName = (typeof data !== 'undefined' && data);
            }, (data) => {
                ctrl.validShortName = data;
            });
        };
    }

})();
