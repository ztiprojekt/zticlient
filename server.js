var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join('/dist')));

app.get('/*', function(req, res) {
    res.

    sendFile(path.join('/dist/index.html'));
});

app.listen(app.listen(4200, function () {
    console.log('App started');
});