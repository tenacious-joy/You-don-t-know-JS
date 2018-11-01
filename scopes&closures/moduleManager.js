var MyModules = (function manager(){
    var modules = {};

    function define(name, deps, impl){
        for(var i=0;i<deps.length;i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();

MyModules.define("bar",[], function() {
    function hello(who) {
        console.log("Let me introduce "+who);
    }

    return {
        hello: hello
    }
} );

MyModules.define("foo",["bar"], function(bar) {
    var hungry = "hippo";
    function awesome() {
      console.log(bar.hello(hungry.toUpperCase()));  
    }
    return {
        awesome:awesome
    }
});

MyModules.define("testDynamism", ["test"], function(test) {
   function testFunc() {
       if(!test) {
           test = {
               hello: function hello(val) {
               console.log(val);
           }
           }
       }
       console.log(test.hello("check"));
   }
   return {
       testFunc:testFunc
   }
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
var testFunction = MyModules.get("testDynamism");

console.log(bar.hello("hippo"));
console.log(foo.awesome());
console.log(testFunction.testFunc());