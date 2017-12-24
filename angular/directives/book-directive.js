app.directive('bookDirective' , function(getRequestService){

	
	return{

		restrict	: 'E' ,
		templateUrl : 'views/book-template.html',
		controller : function($scope , $route){
						//console.log("Checking scope id ");
						//console.log($scope);
						$scope.loadAllDetails();
						

							angular.element('#button').click(function(){
								$route.reload();
							})
					} 
		
	}
});

