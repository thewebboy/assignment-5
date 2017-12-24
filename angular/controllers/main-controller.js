app.controller('mainController' , ['getRequestService' ,'$scope' , function(getRequestService , $scope ){

	
	$scope.data = [] ;
	$scope.data1 = [] ;
	$scope.data2 = [] ;
	$scope.data3 = [] ;
	
	$scope.loadAllDetails = function() {

					
		$scope.booksApi = function(){

			getRequestService.getBooks()
			.then( function(response){
				$scope.data1 = response.data ;
				console.log("this is success response of books!");
				//console.log($scope.data1);

				for( var i in $scope.data1){
				$scope.data.push($scope.data1[i])
			}

			}, function(response){
				alert("Check console");
				console.log(response);

			}); // async func end here

		}(); // end of booksAPI function


		$scope.housesApi = function(){

			getRequestService.getHouses()
			.then( function(response){
				$scope.data2 = response.data ;
				console.log("this is success response of houses!");
				//console.log($scope.data2); 

				for( var i in $scope.data2){
				$scope.data.push($scope.data2[i]) ;
			}

			}, function(response){
				alert("Check console");
				console.log(response);

			}); // async func end here

		}();// end of housesApi function



		$scope.charactersApi = function(){

			getRequestService.getCharacters()
			.then( function(response){

				$scope.data3 = response.data ;
				console.log("this is success response characters!");
				//console.log($scope.data3);

				for( let i in $scope.data3){
				$scope.data.push($scope.data3[i])
			}

				console.log($scope.data) ;

			}, function(response){
				alert("Check console");
				console.log(response);

			}); // async func end here

		}(); // end of charactersApi function

				

	} // end of loadAllDetails function*/

}]) ; // end of maincontroller