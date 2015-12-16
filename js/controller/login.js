define(['app'], function(app){
	app.controller('LoginCtrl', function($scope, $state) {
		$scope.stateName = $state.current.name;
		$scope.login =  function() {
			$state.go('public.report');
		}
	});
});