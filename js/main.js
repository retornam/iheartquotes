(function() {
	var result;
	var quotes = [
		"WHAT WOULD YOU DO IF YOU WEREN'T AFRAID",
		"STAY FOCUSED & KEEP SHIPPING",
		"MOVE FAST AND BUILD THINGS",
		"PROCEED AND BE BOLD",
		"DONE IS BETTER THAN PERFECT",
		"THE MARTIANS ARE COMING TO SAVE THE EARTH"
	];

	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://iheartquotes.com/api/v1/random?format=json", false);
	xhr.overrideMimeType("application/json");
	xhr.send();
	if(xhr.status === 200){
		result = JSON.parse(xhr.responseText);
	}
	
	var quote;
	console.log("Log result");
	console.log(typeof result);

	if(typeof(result) != "undefined") {

		quote =result["quote"];
		console.log(result["quote"]);

	} else {
		quote = quotes[Math.floor(Math.random()*quotes.length)];

	}
	var inner = document.getElementById("inner");
	inner.innerHTML = quote;
})();
