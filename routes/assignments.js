var express = require('express');
var router = express.Router();
var Assignments = require('../database/assignmentModel.js')

/* GET users listing. */
router.get('/:account', function(req, res, next) {
  // console.log(req.params)
  Assignments.find({user: req.params.account})
             .exec()
             .then(function (assignments) {
               res.json(assignments)
             })
});

module.exports = router;
