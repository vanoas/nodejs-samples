var fs = require('fs');
var async = require('async');

function add(n, callback) {
    setTimeout(function() {
        callback(null, n + 1);
    });
}

function mul(n, callback) {
    setTimeout(function() {
        callback(null, n * n);
    });
}

var addMul = async.compose(add, mul);

addMul(4, function(err, result) {
    console.log(result);
});