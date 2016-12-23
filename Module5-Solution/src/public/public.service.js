(() => {
    'use strict';

    angular.module('public')
        .service('userService', UserService);

    UserService.$inject = ['$http', 'ApiPath'];
    function UserService($http, ApiPath) {
        const service = this;

        service.addUser = (userDetils) => service.checkShortName(userDetils.favoriteItem.shortName)
            .then((data) => {
                service.user = userDetils;
                service.user.favoriteItem = data;
                return typeof data !== 'undefined' && data !== false;
            });

        service.checkShortName = shortName => $http({
            method: 'GET',
            url: (`${ApiPath}/menu_items/${shortName}.json`),
        }).then(response => response.data, () => false);
    }
})();
