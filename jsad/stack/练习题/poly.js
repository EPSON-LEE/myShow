
function Stack(){
	this.datastore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.clear = clear;
	this.length = length;
	this.peek = peek;
}

function push(element){
	this.datastore[this.top++] = element;
}

function pop(){
	return this.datastore[--this.pop];
}

function clear(){
	return this.top = 0;
}

function length(){
	return this.top;
}

function peek(){
	return this.datastore[this.top-1];
}

function poly(sstring){ //传入数组
	
	var s = new Stack();
	var j = 0;
	for(var i = 0; i<sstring.length; i++){
		
		if(sstring[i] == '('){
			j += 1;
		}
		if(sstring[i] == ')'){
			j -= 1;
			if(j<0){
				console.log("error");
				return false;
			}
		}			
	}
	if(j == 0){
		console.log("perfect");
	}else{
		console.log("error");
	}
}


var s = '((()';
poly(s);