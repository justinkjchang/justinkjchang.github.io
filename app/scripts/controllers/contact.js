'use strict';

/**
 * @ngdoc function
 * @name justinkjchanggithubioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the justinkjchanggithubioApp
 */
angular.module('justinkjchanggithubioApp')
  .controller('ContactCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
