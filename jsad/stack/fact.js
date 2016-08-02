//Ê¹ÓÃÕ»Ä£Äâ½×³Ë
function Stack(){
	this.datastore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push(element){
	this.datastore[this.top++] = element;
}

function pop(){
	return this.datastore[--this.top];
}

function peek(){
	return this.datastore[this.top-1];
}

function length(){
	return this.top;
}

function clear(){
	return this.top = 0;
}

function fact(n){
	
	var s = new Stack();
	var result = 1;
	while(n>0){
		s.push(n--);
	}
	
	while(s.length()>0){
		result *= s.pop();
	}
	return result;
}

console.log(fact(5));
