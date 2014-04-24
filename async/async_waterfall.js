var fs = require('fs');
var async = require('async');


try {

    async.waterfall(
        [
            function readData(callback) {
                fs.readFile('data.txt', 'utf8', function(err, data) {
                    callback(err, data);
                });
            },
            function modify(text, callback) {
                var adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
                callback(null, adjdata);
            },
            function writeData(text, callback) {
                fs.writeFile('data1.txt', text, function(err){
                    callback(err);
                });
            }
        ],
        function(err, result) {
            if(err) throw err;
            console.log(result);
        }
    );

} catch (err) {
    console.log(err);
}