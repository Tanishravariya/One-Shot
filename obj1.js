let Counter={
    count:0,
    increment: function(){this.count++},
    decrement: function(){this.count--},
    reset: function(what){what?this.count=what:this.count=0},
    getCount: function(){
        return this.count
    },
}

Counter.increment()
Counter.increment()
console.log(Counter.getCount());
Counter.decrement()
console.log(Counter.getCount());
Counter.reset(89)
console.log(Counter.getCount());
