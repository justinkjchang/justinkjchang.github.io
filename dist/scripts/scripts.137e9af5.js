"use strict";angular.module("justinkjchanggithubioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main",activtetab:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about",activtetab:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact",activtetab:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("justinkjchanggithubioApp").controller("MainCtrl",["$scope","$route",function(a,b){a.$route=b,this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("justinkjchanggithubioApp").controller("AboutCtrl",["$scope","$route",function(a,b){a.$route=b,this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);var YTMenu=function(){function a(){[].slice.call(document.querySelectorAll(".dr-menu")).forEach(function(a,b){var c=a.querySelector("div.dr-trigger"),d=c.querySelector("span.icon-menu"),e=!1;c.addEventListener("click",function(b){e||(a.className+=" dr-menu-open",e=!0)},!1),d.addEventListener("click",function(b){return e?(b.stopPropagation(),e=!1,a.className=a.className.replace(/\bdr-menu-open\b/,""),!1):void 0},!1)})}a()}();angular.module("justinkjchanggithubioApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/contact.html","<p>This is the contact view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);