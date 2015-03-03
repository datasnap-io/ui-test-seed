angular.module('ds.weatherApp',['ui.router'])
.config(function( $stateProvider, $urlRouterProvider){

    //Set up some routing path rules
    $urlRouterProvider
        .when('','/')

    //Set up our route handler rules
    $stateProvider
        .state('home',{
            url:'/',
            controller:'HomeController',
            templateUrl:'./templates/HomeTemplate.html'
        })

})
.controller('HomeController',function(){
    console.log('Hey I am the home controller');
})

