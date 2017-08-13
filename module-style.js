var Person = (function(){
	var name = "Ryan",
		gender = "male";
	function sayName(){
		console.log(name);
	}

	return {
		name: name,
		sayName: sayName
	}
})()