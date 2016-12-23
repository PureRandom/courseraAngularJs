(() => {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userDetails'];
    function MyInfoController(userDetails) {
        const ctrl = this;
        ctrl.user = {
            emailAddress: "qufazor@hotmail.com",
            favoriteItem: {
                category_short_name: "A",
                created_at: "2016-12-21T21:01:25.769Z",
                description: "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
                id: 1,
                image_present: true,
                large_portion_name: "quart",
                name: "Won Ton Soup with Chicken",
                price_large: 5,
                price_small: 2.55,
                short_name: "A1",
                small_portion_name: "pint",
                updated_at: "2016-12-21T21:01:25.769Z",
            },
            firstName: "Virginia",
            lastName: "Maldonado",
            phoneNumber: "34567895678",
        };
        
        if (typeof userDetails !== 'undefined' && typeof userDetails.favoriteItem !== 'undefined') {
            ctrl.user = userDetails;
        }
    }
})();
