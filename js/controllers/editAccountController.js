angular.module('editAccountController', [])
    .controller('editAccountCtrl', function($scope, db,$location) {
       
        db.getData().then(function(result) {
        		console.log("radi scope iz edita");
            $scope.data = result.data;
        });
        $scope.deleteAccount = function (account) {
        		db.deleteAccount(account.id).then(function (result) {
    				$location.path('/')

        		},function (err) {
        				console.log(err);
        		})
        };
        $scope.setActiveAccount = function (account) {
        		db.setActiveAccount(account);
        		$location.path('/editForm');
        }
    })