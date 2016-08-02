



function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

//从队列尾部进入
function enqueue(element){
	this.dataStore.push(element);
}

//从队列头部出元素
function dequeue(){
	return this.dataStore.shift();
}

//获取队列第一个元素
function front(){
	return this.dataStore[0];
}

//获取队列最后一个元素
function back(){
	return this.dataStore[this.dataStore.length-1];
}

//通过toString()方法返回队列内所有元素
function toString(){
	var reStr = "";
	for(var i = 0; i<this.dataStore.length; i++){
		reStr += this.dataStore[i] + "\n";
	}
	return reStr;
}

//判断队列是否为空
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}




function distribution(num,queue,n,digit){
	
	for(var i = 0; i<num.length; i++){
		if(digit == 1){
			queue[num[i]%10] = num[i];
		}else{
			queue[num[i]/10] = Math.floor(num[i]/10);
		}
	}
}


function collect(nums,queues){
	var i = 0;
	for(var digit = 0; digit<10; digit++){
		while(!queues[digit].empty()){
			nums[i++] = queues[digit].dequeue();
		}
	}

}

function displayArr(arr){
	for(var i = 0; i<arr.length; i++){
		console.log(arr[i]+"\n");
	}
}


var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
console.log(q.toString());
q.dequeue();
console.log(q.empty());


