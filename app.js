var app = angular.module('flapperNews', []);

app.controller('MainController', [ '$scope',
  function($scope){
    $scope.test = 'Hello, world!';
  }
]);