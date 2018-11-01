// how the call site determines where this will point to during function execution?
// Any of the 4 rules should apply

// Rule 1 - Default binding
 // Common case of function calls - standalone function invocation

(function() {
    function foo() {
        console.log(this.a); // undefined
    }
    var a = 2;
    foo();
})();

// with strict mode used inside the called function; // global object is not eligible for the default binding.
// so this is set to undefined
(function() {
function foo() {
    "use strict";
    console.log(this.a); // TypeError
}
var a = 2;
foo();
})();

// with strict mode used at the call-site
(function() {
    function foo() {
    console.log(this.a); // 2
}
var a = 2;
(function() {
    "use strict";
    foo();
})();
})();
