'use strict';

angular.module('mobileBugReporterApp', [])
	.config(function ($routeProvider)
	{
		$routeProvider
			.when('/', {
				templateUrl: 'views/category.html',
				controller: 'CatCtrl'
			})
			.when('/details', {
				templateUrl: 'views/details.html',
				controller: 'DetailCtrl'
			})
			.when('/details/submit', {
				templateUrl: 'views/submit.html',
				controller: 'SubmitCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
