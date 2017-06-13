
angular.module('stationApp',['ui.router','ngResource','stationApp.controllers','stationApp.services']);

angular.module('stationApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('stations',{
        url:'/stations',
        templateUrl:'partials/stations.html',
        controller:'StationListController'
    }).state('viewStation',{
       url:'/stations/:id/view',
       templateUrl:'partials/station-view.html',
       controller:'StationViewController'
    }).state('newStation',{
        url:'/stations/new',
        templateUrl:'partials/station-add.html',
        controller:'StationCreateController'
    }).state('editStation',{
        url:'/stations/:id/edit',
        templateUrl:'partials/station-edit.html',
        controller:'StationEditController'
    }).state('weather',{
        url:'/weather',
        templateUrl:'partials/weather.html',
        controller:'WeatherListController'
    });
}).run(function($state){
   $state.go('stations');
});
