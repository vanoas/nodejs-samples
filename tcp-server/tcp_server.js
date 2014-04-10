var net  = require('net');

var server = net.createServer(function(conn) {

    console.log('connected');

    conn.on('data', function(data) {
        console.log(data + ' or ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Repeating: ' + data);
    });

}).listen(8124);

console.log('listenning on port 8124');
