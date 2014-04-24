var fs = require('fs');
var async = require('async');

async.parallel({
    data1: function () {
        var sum=0;
        for(var i = 0; i < 1000000; i++) {
            sum += i;
        }
        console.log('sum: ' + sum);
        console.log('data1');
    },
    data2: function() {
        console.log('data2');
    },
    data3: function() {
        console.log('data3');
    }
}, function (err,result) {
    if(err) throw err;
});