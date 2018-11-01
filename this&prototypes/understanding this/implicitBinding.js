// when there's a context object for a function reference,implicit binding rule says that "that" object should be used for func call's this binding
(function() {
    function foo() {
        console.log(this.a);
    }
    var obj = {
        a:2,
        foo: foo
    }
    obj.foo();
})();

(function() {
    function foo() {
        console.log(this.a);
    }
    var obj2 = {
        a: 42,
        foo: foo
    }
    var obj1 = {
        a: 2,
        obj2: obj2
    }

    obj1.obj2.foo(); //42
})();

// Implicitly lost
(function() {
    function foo() {
        console.log(this.a);
    }
    var obj = {
        a: 2,
        foo: foo
    }
    var bar = obj.foo; // function reference/alias
    var a = "oops, global";
    bar(); //"oops, global"
})();

// Implicitly list - callback functions
(function() {
    function foo() {
        console.log(this.a);
    }

    function doFoo(fn) {
        fn();
    }
    var obj = {
        a: 2,
        foo: foo
    }
    
    var a = "oops, global";
    doFoo(obj.foo); //"oops, global"
})();

// if the callback is sent to settimeout?
(function() {
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2,
        foo: foo
    }
    
    var a = "oops, global";
    setTimeout(obj.foo, 100);
})();
