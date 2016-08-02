// 用栈来检测回文数
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
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

function isPalindrome(word){
	var s = new Stack();
	var rword = "";
	for(var i = 0; i<word.length; i++){
		s.push(word[i]);
	}
	while(s.length() > 0){
		rword += s.pop(); 
	}
	
	if(word == rword){
		return true;
	}else{
		return false;
	}
	
}



var word = "racecar";
if(isPalindrome(word)){
	console.log("true");
}else{
	console.log("false");	
}

var word2 = "abcd"; 
if(isPalindrome(word2)){
	console.log("true");
}else{
	console.log("false");	
}