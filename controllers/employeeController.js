var employeeModel=require('../models/employee');


module.exports = {
    getAllEmployees: function (req, res) {

        employeeModel.getAllEmployess(function(error,employees){

            res.render('employees/index', {
                employees: employees
            });

        });
    }
};