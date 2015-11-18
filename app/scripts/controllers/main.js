'use strict';

/**
 * @ngdoc function
 * @name justinkjchanggithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the justinkjchanggithubioApp
 */
angular.module('justinkjchanggithubioApp')
  .controller('MainCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });