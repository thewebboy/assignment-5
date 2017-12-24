app.service('detailsService', function ($http) {
	
	var main = this ;
	
	this.baseUrl = 'https://anapioficeandfire.com/api/' ;

	this.getHouseDetails = function(){

		return $http({

				method : 'GET' ,
				url 	: main.baseUrl + 'house' 
			})
	} ;

	this.getBookDetails = function(){

			return $http({

					method : 'GET' ,
					url 	: main.baseUrl + 'books' 
				})
		} ;

	this.getCharacterDetails = function(){

			return $http({

					method : 'GET' ,
					url 	: main.baseUrl + 'books' 
				})
		} ;

});