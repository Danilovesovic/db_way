angular.module('bankApp', [
        'mainController',
        'ngRoute',
        'dbService',
        'addAccountController',
        'editAccountController',
        'editFormController'
    ])
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when('/', {
                templateUrl: "pages/main.html",
                controller: 'mainCtrl'
            })
            .when('/addAccount', {
                templateUrl: "pages/addAccount.html",
                controller: 'addAccountCtrl'
            })
            .when('/editAccount', {
                templateUrl: "pages/editAccount.html",
                controller: 'editAccountCtrl'
            })
            .when("/editForm",{
                templateUrl: "pages/editForm.html",
                controller: 'editFormCtrl'
            })
    });