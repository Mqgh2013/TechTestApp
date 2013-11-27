//创建了叫做“myApp”的AngularJS模块
var app = angular.module('rogerApp', []);

app.run(function($rootScope) {
    $rootScope.name = 'RogerRootScriptName';
});

app.controller('rogerController', function ($scope, $filter) {
    $scope.person = {
        name: $filter('lowercase')('Yoyo'),
        Age: "5 Months"
    };
});

app.controller('childController', function($scope) {
    var i = 5;
    $scope.SayHello = function() {
        $scope.person.Age = i++ + " Months";
    };
});

app.controller('playerController', ['$scope', function($scope) {
    $scope.audio = document.createElement('audio');
    $scope.playing = false;
    $scope.audio.src = "/Content/longnosee.mp3";

    $scope.play = function() {
        $scope.audio.play();
        $scope.playing = true;
    };
    $scope.stop = function() {
        $scope.audio.pause();
        $scope.playing = false;
    };
    $scope.audio.addEventListener('ended', function() {
        $scope.$apply(function() {
            $scope.audio.stop();
        });
    });
}]);

app.controller("clockController", function($scope) {
    var updateClock = function() {
        $scope.clock = new Date();
    };
    var timer = setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});

app.controller('httpController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
    $scope.response = [];
    $scope.makeRequest = function() {
        $http({
            method: 'jsonp',
            url: 'http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK'
        }).success(function(data, status, header, config) {
            $scope.response = data;
        }).error(function(data, status, header, config) {
        });
    };
    $scope.clearResponse = function() {
        $scope.response = [];
    };

    //test ng-repeat
    $scope.listRepeat = [
   /*     { name: $filter('uppercase')('roger1'), },*/
        { name: "roger2", },
        { name: "roger3", },
        { name: "roger4", }
    ];
    $scope.people = {
        'Ari': 'orange',
        'Q': 'purple',
        'Sean': 'green'
    };
    $scope.today = new Date();
}]);
/* below is testing main website*/

app.controller('TestMainElementController', function ($scope) {
    $scope.SayHello1 = function () {
        alert(" a");
    };
});
function Ctrl($scope) {
    $scope.userType = 'guest';
}