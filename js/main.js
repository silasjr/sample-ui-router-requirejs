require.config({
	baseUrl: 'js',
	paths: {
		'angular': 'lib/angular.min',
		'angularAMD': 'lib/angularAMD',
		'angular-ui-router': 'lib/angular-ui-router.min',
		'angular-animate': 'lib/angular-animate.min'
	},
	shim: {
		'angularAMD': ['angular'],
		'angular-ui-router': ['angular'],
		'angular-animate': ['angular']
	},
	
	// kick start application
	deps: ['app']
});