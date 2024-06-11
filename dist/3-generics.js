"use strict";
function myFunc(input) {
    return input;
}
// now input can be object or array .. 
// for this we can use generic .. 
var result = myFunc({
    name: "Tom"
});
var result2 = myFunc(["Tom"]);
