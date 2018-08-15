var mongoose = require('mongoose');
var employeeModel = mongoose.model('employee', { name: String });


module.exports = {

    getAllEmployess: function (callback) {
        employeeModel.find(function (err, employees) {
            callback(err, employees);
        });
    }
};
