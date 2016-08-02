



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




function distribute(nums,queues,n,digit){
	for(var i = 0; i<n; i++){
		if(digit == 1){
			queues[nums[i]%10].enqueue(nums[i]);
		}else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}
	}
}


function collect(queues,nums){
	var i = 0;
	for(var digit = 0; digit < 10; digit++){
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


//main
var queues = [];
for(var i = 0; i<10; i++){
	queues[i] = new Queue();
}

var nums = [];
for(var i = 0; i<10; i++){
	nums[i] = Math.floor(Math.floor(Math.random()*101));
}

console.log("Before radix sort:");
displayArr(nums);

distribute(nums,queues,10,1);
collect(queues,nums);

distribute(nums,queues,10,10);
collect(queues,nums)

console.log("\n\nAfter radix sort:");
displayArr(nums);


















