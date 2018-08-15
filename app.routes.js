var router = require('express').Router();

var employeeController=require('./controllers/employeeController');


/* employee routes: start */

router.get('/list-employees', employeeController.getAllEmployees);

/* employee routes: end */





module.exports = router;