



function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

//�Ӷ���β������
function enqueue(element){
	this.dataStore.push(element);
}

//�Ӷ���ͷ����Ԫ��
function dequeue(){
	return this.dataStore.shift();
}

//��ȡ���е�һ��Ԫ��
function front(){
	return this.dataStore[0];
}

//��ȡ�������һ��Ԫ��
function back(){
	return this.dataStore[this.dataStore.length-1];
}

//ͨ��toString()�������ض���������Ԫ��
function toString(){
	var reStr = "";
	for(var i = 0; i<this.dataStore.length; i++){
		reStr += this.dataStore[i] + "\n";
	}
	return reStr;
}

//�ж϶����Ƿ�Ϊ��
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


















