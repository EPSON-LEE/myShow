//�ݹ�ʵ�ֽ׳�
function factorial(n){
	if(n === 0){
		return 1;
	}else{
		return n * factorial(--n);
	}
	
}
console.log(factorial(5));