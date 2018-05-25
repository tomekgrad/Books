$.ajax({
   url: 'http://localhost:8282/books',
   type: 'GET',
}).done( function(data) {
//	console.log(data)
   getData(data);
});


function getData(dane){
	for ( var i = 0 ; i < dane.length; i++){
		   console.log(dane[i].title);
	   }
}