(function(){
    function baz() {
        // call-site is window
        console.log("baz");
        bar(); 
    }
    function bar() {
        // callsite is baz
        console.log("bar");
        foo(); 
    }
    function foo() {
        // callsite is bar
        console.log("foo"); 
    }
    baz();
})();