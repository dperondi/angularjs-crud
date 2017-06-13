
angular.module('stationApp.controllers',[])
.controller('StationListController',function($scope,$state,popupService,$window,Station){

    $scope.stations = Station.get();

    $scope.deleteStation = function(station){
        
        if(popupService.showPopup('Really delete this?')){
            
            $scope.stations.$delete({id: station.id},function(){
                $state.go('stations');
            });
            
        }
    }

}).controller('StationViewController',function($scope,$stateParams,Station){

    $scope.station = Station.get({id:$stateParams.id});

}).controller('StationCreateController',function($scope,$state,$stateParams,Station){

    $scope.station = new Station();

    $scope.addStation=function(){
        $scope.station.$save(function(){
            $state.go('stations');
        });
    }

}).controller('StationEditController',function($scope,$state,$stateParams,Station){

    $scope.updateStation=function(station){
        $scope.station.$update({id: station.id},function(){
            $state.go('stations');
        });
    };

    $scope.loadStation=function(){
        $scope.station = Station.get({id:$stateParams.id});
    };

    $scope.loadStation();
    
}).controller('WeatherListController',function($scope,$state,popupService,$window,Weather,Station){

    //id=1 é um valor default
    $scope.weather = Weather.get({id:1});
    
    $scope.stationOption = Station.get();
    
    $scope.changeStation = function(){
        //stationSeleced é a variavel selecionada na view
        $scope.weather = Weather.get({id:$scope.stationSelected.id});
    };

});
