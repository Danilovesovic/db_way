angular.module('addAccountController', [])
    .controller('addAccountCtrl', function($scope,db,$location) {
    	$scope.takeValues = function () {
    		db.insertIntoDb({
    			name : $scope.account.username,
    			deposit : $scope.account.deposit,
    			cCard : $scope.account.cCard,
    		}).then(function () {
    				console.log("inserted new account");
    				$location.path('/')

    		})
    	}
    })