const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/angularr-test-app'));
app.get('/*', function(req, res) {
    res.sendFile(path.join('./dist/angularr-test-app/index.html'));
});
app.listen(process.env.PORT || 8080);