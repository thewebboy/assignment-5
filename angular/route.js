app.config(['$routeProvider' , function ($routeProvider) {
	// body...

	$routeProvider 
		.when('/' , {

				templateUrl : 'views/main-view.html' ,
				controller	: 'mainController' 
				
			})
		.when('/:type/:value' , {

				templateUrl	: 'views/detail-view.html' ,
				controller 	: 'detailsController'
		})
		.otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 style="margin-top:100px;"><center>Error 404 : Page not found</center></h1>'
            });
}]);