// get id from html and use them
var $ = function (id) {
    return document.getElementById(id);
}


var calculate_cost = function () {
    // we have to parse - or change - the values to floats. Form values are strings by default.
    var length = parseFloat($("rm1length").value);
    var width = parseFloat($("rm1width").value);
    var height = parseFloat($("rm1height").value);

    if (isNaN(length) || isNaN(width) | isNaN(height)) {
        alert("You have an invalid value. Correct and click submit")
    }
    else {
        var total = ((length * height * 2) + (width * height * 2)) * .5;//50 cents per square foot
        total = total.toFixed(2);
        $("paintingcost").value = "$ " + total;
    }
}
window.onload = function () {
    $("submit").onclick = calculate_cost;

}
