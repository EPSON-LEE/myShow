function Stack(){
	this.dataStore = [];	//定义一个数组存放栈元素 
	this.top = 0;			//标记栈顶元素
	this.push = push;		//向栈内压入元素
	this.pop = pop;			//弹出元素
	this.peek = peek;		//返回栈顶元素
	this.length = length;	//返回栈长度
	this.clear = clear;		//清除栈
}

function push(element){
	this.dataStore[this.top++] = element; 
}

function pop(){
	return this.dataStore[--this.top];
}

function peek(){
	return this.dataStore[this.top-1];
}

function length(){
	return this.top;
}

function clear(){
	this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length:" + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("the popped element is:" + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length:" + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());



