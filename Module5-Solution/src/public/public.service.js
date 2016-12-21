(() => {
    'use strict';

    angular.module('public')
        .service('userService', UserService);

    UserService.$inject = ['$http', 'ApiPath'];
    function UserService($http, ApiPath) {
        const service = this;
        let serviceUser = {'hello':'hello'};
        service.addUser = (userDetils) => {
            return service.checkShortName(userDetils.favoriteItem.shortName).then((data) => {
                serviceUser = userDetils;
                serviceUser.favoriteItem = data;
                return typeof data !== 'undefined' && data !== false;
            });
        };

        service.checkShortName = (shortName) => $http({
            method: 'GET',
            url: (`${ApiPath}/menu_items/${shortName}.json`),
        }).then((response) => response.data, () => false);

        service.getUser = () => serviceUser;
    }
})();
