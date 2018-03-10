let msg = "GLOBAL";

function outer(a) {
    let msg = "OUTER";
    if (true) { let msg = "BLOCK" }
}