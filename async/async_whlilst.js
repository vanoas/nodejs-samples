var fs = require('fs');
var async = require('async');

var count = 0;

try {

    async.whilst(
        function() {
            console.log('check condition')
            return count < 5;
        },
        function(callback) {
            console.log('work unit');
            count++;
            setTimeout(callback, 1000);
        },
        function(err) {
            console.log('err handler');
        }
    );

} catch(err) {
    console.log(err);
}