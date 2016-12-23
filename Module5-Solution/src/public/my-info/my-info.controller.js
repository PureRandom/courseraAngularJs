(() => {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userDetails'];
    function MyInfoController(userDetails) {
        const ctrl = this;

        if (typeof userDetails !== 'undefined' && typeof userDetails.favoriteItem !== 'undefined') {
            ctrl.user = userDetails;
        }
    }
})();
