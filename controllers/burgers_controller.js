var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//ROUTES=======================================================
router.get('/', function(req, res) {
    //call form model
    burger.selectAll(function(data) {
        var dataObject = { burger_table: data };
          console.log('/ is working');
          console.log(dataObject);
          res.render('index', dataObject);
      
    });
});

router.post('/api/burgers', function(req, res) {
    
    burger.insertOne('burger_name', req.body.burger_name, function(result) {
      // Send back the ID of the new quote
      console.log('/api/burgers is working');
      res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    
    var condition = 'id = ' + req.params.id;
  
    console.log('condition', condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
        console.log('/api/burgers/:id working');
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
//ROUTES=======================================================

module.exports = router;