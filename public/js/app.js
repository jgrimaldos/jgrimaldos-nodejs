'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider.
			when('/', {
				templateUrl : 'partials/index',
				controller : IndexCtrl 
			}).
			when('/addPost', {
				templateUrl : 'partials/addPost',
				controller : AddCtrl
			})
			when('/readPost/:id', {
				templateUrl : 'partials/readPost',
				controller : ReadCtrl
			}).
			when('/editPost/:id', {
				templateUrl : 'partials/editPost',
				controller : EditCtrl
			}).
			when('/deletePost/:id', {
				templateUrl : 'partials/deletePost',
				controller : DeleteCtrl
			}).
			otherwise({
				redirectTo : '/'
			});
		$locationProvider.html5Mode(true);
	}]
);