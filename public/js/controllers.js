'use strict';

/* Controllers */

function IndexCtrl( $scope, $http) {

	$https.get('/api/post').
		success(function(data, status, header, config) {
			$scope.posts = data.posts;
		});
}

