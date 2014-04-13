

exports.contactArray = function(str, array) {
    return array.map(function(element) {
        return str + ' ' + element;
    });
}