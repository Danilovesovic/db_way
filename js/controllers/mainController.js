angular.module('mainController', [])
    .controller('mainCtrl', function($scope, db) {
        db.getData().then(function(result) {
            $scope.data = result.data;
            	console.log("radi iz main controllera");
        })
    });