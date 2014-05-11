var fs = require('fs');
var async = require('async');

async.parallelLimit({
        data1: function (callback) {
            setTimeout(function() {
                callback(null, 'data1');
            }, 1300);
        },
        data2: function(callback) {
            setTimeout(function() {
                callback(null, 'data2');
            }, 200);
        },
        data3: function(callback) {
            setTimeout(function() {
                callback(null, 'data3');
            }, 150);
        },
        data4: function(callback) {
            setTimeout(function() {
                callback(null, 'data4');
            }, 700);
        },
        data5: function(callback) {
            setTimeout(function() {
                callback(null, 'data5');
            }, 200);
        },
        data6: function(callback) {
            setTimeout(function() {
                callback(null, 'data6');
            }, 200);
        }
    }, 2,
    function (err,result) {
        console.log(result);
        if(err) throw err;
    });