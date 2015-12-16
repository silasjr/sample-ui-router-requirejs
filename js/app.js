define(['angularAMD', 'angular-ui-router', 'angular-animate'], 
	function(angularAMD){
		var app = angular.module('sampleUiRouter', ['ui.router', 'ngAnimate']);
		
		app.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/login');
			
			$stateProvider
				.state(
					'public',
					angularAMD.route({
						templateUrl: 'views/public.html'
					})
				)
				.state(
					'public.login',
					angularAMD.route({
						url: '/login',
						templateUrl: 'views/login.html',
						controller: 'LoginCtrl',
						controllerUrl: 'controller/login'
					})
				)
				.state(
					'public.report', {
						'url': '/report',
						'views': {
							'': angularAMD.route({
								url: '/report',
								templateUrl: 'views/report.html',
								controller: 'ReportCtrl',
								controllerUrl: 'controller/report'
							}),
							'dataTable@public.report': angularAMD.route({
								templateUrl: 'views/report-datatable.html'
							}),
							'chart@public.report': angularAMD.route({
								templateUrl: 'views/report-chart.html'
							})
						}	
					}					
				);
			
		});
		
		return angularAMD.bootstrap(app);
		
});