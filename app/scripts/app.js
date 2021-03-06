'use strict';

/**
 * @ngdoc overview
 * @name justinkjchanggithubioApp
 * @description
 * # justinkjchanggithubioApp
 *
 * Main module of the application.
 */

angular
  .module('justinkjchanggithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activetab: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        activetab: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
