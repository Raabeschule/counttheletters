$(document).ready(function() {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var html = '';
    letters.forEach(function(letter) {
        html += '<button id="' + letter + '" name="' + letter + '>' + letter + '</button>';
    });
});
