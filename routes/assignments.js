var express = require('express');
var router = express.Router();
var Assignments = require('../database/assignmentModel.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Assignments.find({user: 'ma2321987'})
             .exec()
             .then(function (assignments) {
               res.json(assignments)
             })
});

module.exports = router;
