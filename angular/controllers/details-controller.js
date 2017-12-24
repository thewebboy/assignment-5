app.controller('detailsController' , ['$routeParams' , '$http' , '$scope' ,'getRequestService', function ($routeParams , $http , $scope , getRequestService) {
	
	$scope.type = $routeParams.type ;
	$scope.value = $routeParams.value;

	
	$scope.data = [] ;
	$scope.myData = {} ;
	$scope.baseUrl = 'https://anapioficeandfire.com/api/' ;
	$scope.myBook = [];  // used for showing books in the character card details
	
	
//function for loading house details
	$scope.loadHouseDetails = function() {

		getRequestService.getHouses()
		.then( function(response){
			
			$scope.data = response.data ;
			
			for(i in $scope.data){
				
				if( $scope.value == $scope.data[i].name ){

					$scope.myData = $scope.data[i] ;
					var overlordUrl = $scope.data[i].overlord ;
					var currentlordUrl = $scope.data[i].currentLord ;
					var heirUrl = $scope.data[i].heir ;

					if( overlordUrl != "" || overlordUrl != undefined)
						$scope.loadHouseOverlord(overlordUrl , 'o'); // o-> overlord
					if( currentlordUrl != "" || currentlordUrl != undefined)
						$scope.loadHouseOverlord(currentlordUrl , 'c'); // c-> currentlord
					if( heirUrl != "" || heirUrl != undefined)
						$scope.loadHouseOverlord(heirUrl , 'h'); // h-> heir
				}
			}
			console.log($scope.myData);

		} , function(response){
			console.log(response);
			alert('error!');

		}) ;
	} 
	// end of loadHouseDetails

//function for loading book details

	$scope.loadBookDetails = function() {

		getRequestService.getBooks()
		.then( function(response){
			
			$scope.data = response.data ;
			
			for(i in $scope.data){
				
				if( $scope.value == $scope.data[i].isbn ){

					$scope.myData = $scope.data[i] ;
					
				}
			}
			console.log($scope.myData);

		} , function(response){
			console.log(response);
			alert('error!');

		}) ;
	};
	 // end of loadBookDetails

//function for loading character details

	$scope.loadCharacterDetails = function() {

		getRequestService.getCharacters()
		.then( function(response){
			
			$scope.data = response.data ;
			
			for(i in $scope.data){
				
				if( $scope.value == $scope.data[i].aliases[0] ){

					$scope.myData = $scope.data[i] ;
					for(var x in $scope.data[i].books){
						$scope.bookUrl = $scope.data[i].books[x] ;
						$scope.loadCharacterBook(x );
					}
				}
			}
			console.log($scope.myData);
			console.log($scope.bookUrl);

		} , function(response){
			console.log(response);
			alert('error!');

		}) ;
	}; 
	// end of loadCharacterDetails

	// used for showing books in the character card , this function is called from loadCharacterDetails
	//depending on no. of books, i is the index value that helps in storing data(book name) in array
	$scope.loadCharacterBook = function(i) {

		$http({
			method : 'GET' ,
			url : $scope.bookUrl 
		})
		.then( function(response){
			
			$scope.myBook[i] = response.data.name ;
			
		} , function(response){
			console.log(response);
			alert('error!');

		}) ;
	}; // end of loadCharacterBook

	$scope.loadHouseOverlord = function(Url , identity) {

		$http({
			method : 'GET' ,
			url : Url 
		})
		.then( function(response){
			
			if(identity == 'o')
				$scope.overlord = response.data.name ;
			else if(identity == 'c')
				$scope.currentlord = response.data.name ;
			else if(identity == 'h')
				$scope.heir = response.data.name ;
			
		} , function(response){
			console.log(response);
			alert('error!');

		}) ;
	}; // end of loadCharacterBook

	if( $scope.type == 'books'){
		$scope.loadBookDetails();
	}
	if( $scope.type == 'houses'){
		$scope.loadHouseDetails();
	}
	if( $scope.type == 'characters'){
		$scope.loadCharacterDetails();
	}
	

}]);
 // end of controller