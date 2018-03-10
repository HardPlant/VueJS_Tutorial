"use strict";

var msg = "GLOBAL";

function outer(a) {
    var msg = "OUTER";
    if (true) {
        var _msg = "BLOCK";
    }
}