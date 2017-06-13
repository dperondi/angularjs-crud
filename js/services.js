
angular.module('stationApp.services',[])
.factory('Station',function($resource){
    return $resource('http://api.localhost/stations/:id',{id:'@_id'},{
        update: { method: 'PUT', params: {id: '@_id'} },
        delete: { method: 'DELETE', params: {id: '@_id'} }
    });
})
.factory('Weather',function($resource){
    return $resource('http://api.localhost/weather/:id/:begin/:end',{id:'@_id',begin:"2015-06-01",end:"2015-06-10"});
})
.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
