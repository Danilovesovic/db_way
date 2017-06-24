angular.module('dbService', [])
    .service('db', function($http,$location) {
    	var self = this;
    	this.activeAccount = "";
    	this.getActiveAccount = function () {
    		return self.activeAccount;
    	}
    	this.getData = function () {
    		return $http({
            method: "get",
            url: "php/getData.php"
        });
    	};
       
        this.insertIntoDb = function(account) {
            return $http({
                method: "post",
                url: "php/insertData.php",
                data: account
            })
           
        };
        this.deleteAccount = function (id) {
        		console.log(id);
        	return $http({
        		method: "post",
                url: "php/deleteData.php",
                data: {"id":id}
        	})
        };
        this.setActiveAccount = function (account) {
        	self.activeAccount = account;
        }
    });