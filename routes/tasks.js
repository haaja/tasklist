var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mytasklist:rommikola123@ds113958.mlab.com:13958/mytasklist');


//Get All tasks
router.get('/tasks', function(req, res, next) {
    db.tasks.find(function(err, tasks) {
	if (err) {
	    res.send(err);
	}
	res.json(tasks);
    });
});

// Get Single task
router.get('/task/:id', function(req, res, next) {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},
		     function(err, task) {
	if (err) {
	    res.send(err);
	}
	res.json(task);
    });
});

router.get('/tasks', function(req, res, next) {
    res.send('TASKS');
});

module.exports = router;
