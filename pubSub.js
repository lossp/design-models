var eventCenter = (function(){
	var events = {};

	function on(event, handler){
		events[event] = events[event] || [];
		events[event].push({
			handler: handler; //handler作为一个对象，因此需要加上中括号
		})
	};

	function fire(event, arguments){
		if(!events[event]){
			return;
		}
		for(var i = 0; i < events[event].length; i++){
			events[event][i].handler(arguments);
		}
	};

	function off(event){
		delete events[event];
	}

	return {
		on: on,
		fire: fire,
		off: off
	}
})()