var express = require('express');
var router = express.Router();


router.get('/tasks', function(req, res, next) {
    res.send('TASKS');
});

module.exports = router;
