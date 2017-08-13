function Person(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function(){
	console.log(this.name);
}

var Student = function(name, age, score){
	Person.call(this, name, age);
	this.score = score;
}

Student.prototype = createFunction(Person.prototype);

function createFunction(parentObject){
	function F(){};
	F.prototype = parentObject;
	return new F();
}

Student.prototype.sayScore = function(){
	console.log(this.score);
}

var student1 = new Student("lily", "24", "92");