var https= require("https");

function forecastApi(longitude,latitude){




	// weather api from https://darksky.net


	https.get("https://api.darksky.net/forecast/48674da82142018b160dc76e31c21e5e/"+longitude+","+latitude+"?units=si",function(response){

		var info ='';

		response.on('data',function(chunk){
			info+= chunk;
		});

		response.on('end',function(){
			if(response.statusCode===200){

				try{
					var data = JSON.parse(info);
					
					//console.log(data);
					console.log("The weather is "+ data.currently.summary+"in"+data.timezone+" "+"with a temperature of "+data.currently.temperature+ " degrees celsius");

				}

				catch(error){
					console.log("Something went wrong, pls try again later");

				}
			}
			else{
					console.log("Something went wrong, pls try again later")
				}
			
		});



	});


}


module.exports.forecastApi = forecastApi;


