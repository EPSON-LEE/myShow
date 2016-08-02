
function Node(element){
	this.element = element;
	this.next = null;
}

function linkedList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	//this.remove = remove;
	this.display = display;
}

//find node by data
function find(item){
	var cur = this.head;
	while(cur.element != item){
		cur = cur.next;
	}
	return cur;
}

function insert(newElement,item){

	var newNode = new Node(newElement);
	var cur = this.find(item);
	newNode.next = cur.next;
	cur.next = newNode;
	
}

function display(){
	var cur = this.head;
	while(cur != null){
		console.log(cur.element);
		cur = cur.next;
	}
}


var l = new linkedList();
l.insert('a','head')
l.insert('b','conway');
l.insert('c','r');
l.display();