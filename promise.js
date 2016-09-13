var Queue = function(){
    this.list = [];
}

Queue.prototype = {
    constructor:Queue,
    queue:function(fn){
        this.list.push[fn];
        return this;
    },
    dequeue:function(){
        var fn = this.list.shift() || function(){};
        fn.call(this);
    }
}