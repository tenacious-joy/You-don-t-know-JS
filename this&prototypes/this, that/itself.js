// Initial version - this.count refers to some other global count, instead of foo.count
(function(){
    function foo(num){
    console.log("foo "+num);

    this.count++;
}
foo.count = 0;
var i;
for(i=0; i<10;i++){
    if(i>5){
        foo(i);
    }
}
console.log(foo.count);
})();

// aInstead of this, use another object
(function(){
    function foo(num){
    console.log("foo "+num);

    data.count++;
}
var data = {
    count: 0
}
var i;
for(i=0; i<10;i++){
    if(i>5){
        foo(i);
    }
}
console.log(data.count);
})();

// aInstead of this, use foo
(function(){
    function foo(num){
    console.log("foo "+num);

    foo.count++;
}
foo.count = 0;
var i;
for(i=0; i<10;i++){
    if(i>5){
        foo(i);
    }
}
console.log(foo.count);
})();

// Force the use of this
(function(){
    function foo(num){
    console.log("foo "+num);

    this.count++;
}
foo.count = 0;
var i;
for(i=0; i<10;i++){
    if(i>5){
        foo.call(foo,i);
    }
}
console.log("lAST Func"+foo.count);
})();