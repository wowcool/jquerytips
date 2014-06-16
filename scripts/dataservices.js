//Data Services 

//Flikr Example : We call this promise object from the flikrData, and flikrDataAgain functions. Changing the call here would change the data in both of those functions. 
getFlikrData = function () { 
			return $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=?");
		}

//.when() Example : To demonstrate the .when() method for checking if all have loaded.

whenTest = function() { 

json1 = function () { 
			return $.getJSON("json/1.json");
		}

json2 = function () { 
			return $.getJSON("json/2.json");
		}

json3 = function () { 
			return $.getJSON("json/3.json");
		}

// whenFunction = function ()  { 
// 	return $.when(json1(),json2(),json3());

// }

	 return {
        json1: json1,
 		json2: json2,
 		json3: json3,
 		// whenFunction: whenFunction
    };
}
//Call the whenTest function
var testJSON = whenTest();

