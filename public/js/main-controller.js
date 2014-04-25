/**
 * Created by Alex on 4/25/2014.
 */

regexApp.mainController = function($scope, $http) {
    $scope.sendUsername = function(){
        $http.post('users/update',{username: $scope.username}).success(function(data,status){

        }).error(function(data,status){
            alert('Danger Will Robinson!');
        });
    };
};

regexApp.$ng.controller('regexApp.mainController',['$scope','$http',regexApp.mainController])
