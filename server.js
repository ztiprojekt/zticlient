const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/zticlient'));
app.get('/*', function(req, res) {
    res.sendFile(path.join('./dist/zticlient/index.html'));
});
app.listen(process.env.PORT || 8080);