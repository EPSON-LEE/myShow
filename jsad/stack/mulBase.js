
//进制转换栈实现
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function pop(){
	return this.dataStore[--this.top];
}

function peek(){
	return this.dataStore[top-1];
}

function clear(){
	return this.top = 0;
}

function length(){
	return this.top;
}

//具体定义
function mulBase(Base,num){
	var s = new Stack();
	while(num){
		s.push(num % Base);
		num = Math.floor(num / Base);
	}
	var converted = "";
	while(s.length()>0){
		converted += s.pop();
	}
	return converted;
}

console.log(mulBase(2,3));