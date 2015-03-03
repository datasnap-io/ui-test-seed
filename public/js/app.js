angular.module('ds.weatherApp',['ui.router'])
.config(function( $stateProvider, $url){

    $stateProvider.
        state('home',{
            url:'/',
            controller:'HomeController',
            templateUrl:'./templates/HomeTemplate.html'
        })

})
.controller('HomeController',function(){
    console.log('Hey I am the home controller');
})

