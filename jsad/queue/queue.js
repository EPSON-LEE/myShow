



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


