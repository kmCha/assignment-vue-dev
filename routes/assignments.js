var express = require('express');
var router = express.Router();
var Assignments = require('../database/assignmentModel.js')

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  // console.log(req.params)
  Assignments.find({user: req.params.username})
             .exec()
             .then(function (assignments) {
               res.json(assignments)
             })
});

module.exports = router;
