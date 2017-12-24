 // custom filter to sort in ascending order
 app.filter('sortFilter' , function () {

 	// input = datum(inbook-template.html)
 	return function(input , option) {  

 		var array1 = [] ;
 		var array2 = [] ;
 		var array3 = [] ;
 		var output = input ;

 		// for changing sort type as per user's requirement
 		if(option == "descending")
 			option = -1 ;
		else
			option = 1 ;

 		if(input.length == 30){

 			var compare = 0 ;
	 			for( let i=0 ; i<30 ;i++){
		 			if(i<10){
						array1.push(input[i]);
		 			}
	 					 			
		 			else if(i<20){
		 				
						array2.push(input[i]);
		 				
		 			}
		 			else if(i<30){
		 				
						array3.push(input[i]);
		 				
		 			}
		 		} // end of for loop
	 		 // end of if statement

	 		array1.sort(function( a , b ){

	 			var nameA = a.name.toUpperCase() , nameB = b.name.toUpperCase() ;

	 			if(nameA < nameB){
	 				compare = -1 ;
	 			}
	 			else if(nameA > nameB){
	 				compare = 1 ;
	 			}
	 				return compare * option ;
	 		});

	 		array2.sort(function( a , b ){

	 			var nameA = a.name.toUpperCase() , nameB = b.name.toUpperCase() ;

	 			if(nameA < nameB){
	 				compare = -1 ;
	 			}
	 			else if(nameA > nameB){
	 				compare = 1;
	 			}
	 				return compare * option;
	 		});

	 		array3.sort(function( a , b ){
				
				var nameA , nameB ;
				if(a.aliases != undefined )
				nameA = a.aliases[0].toUpperCase(); 
				if(b.aliases != undefined)
				nameB = b.aliases[0].toUpperCase() ;

	 			if(nameA < nameB){
	 				compare = -1 ;
	 			}
	 			else if(nameA > nameB){
	 				compare = 1;
	 			}
	 				return compare * option ;
	 		});

	 		for( var i=0 ; i < 30 ; i++){

	 				if( i < 10){
	 					
	 					output[i] = array1[i];
	 				}
	 				
	 				else if( i < 20){
	 					output[i] = array2[i-10];
	 				}
	 				else if( i < 30){
	 					output[i] = array3[i-20];
	 				}

	 			} // end of for loop
	 	}
 	return output ;
 	}

 });

 