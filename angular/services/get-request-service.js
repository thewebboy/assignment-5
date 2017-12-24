app.service('getRequestService', function($http){

	var main = this ;
	this.url = " https://anapioficeandfire.com/api/" ;

	this.getBooks = function(){

		return $http.get( main.url+'books' ) 

	}

	this.getCharacters = function(){

		return $http.get( main.url+'characters' ) 

	}

	this.getHouses = function(){

		return $http.get( main.url+'houses' ) 

	}


});