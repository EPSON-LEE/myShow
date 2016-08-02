function Stack(){
	this.dataStore = [];	//����һ��������ջԪ�� 
	this.top = 0;			//���ջ��Ԫ��
	this.push = push;		//��ջ��ѹ��Ԫ��
	this.pop = pop;			//����Ԫ��
	this.peek = peek;		//����ջ��Ԫ��
	this.length = length;	//����ջ����
	this.clear = clear;		//���ջ
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



