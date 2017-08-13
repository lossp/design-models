var Person = (function(){
	var instance;
	function init(name){
		return{
			name : name
		}
	}
	return{
		createPerson: function(name){
			if(!instance){
				instance = init(name);
			}
			return instance;
		}
	}
})()
