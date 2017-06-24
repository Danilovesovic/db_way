angular.module('editFormController',[])
		.controller('editFormCtrl',function ($scope,db) {
				$scope.activeAccount = db.getActiveAccount();
				$scope.account = {};
				$scope.account.username = $scope.activeAccount.name;
				$scope.account.deposit = $scope.activeAccount.deposit;
				$scope.account.cCard = $scope.activeAccount.cCard;
		})