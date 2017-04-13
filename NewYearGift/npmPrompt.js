var prompt = require('prompt');

var promptSweet = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('sweet', function (err, result) {
            if(result.sweet !== '4') {
                resolve(result.sweet);
            }else {
                callback();
            }
        });
    });
};
var promptSort = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('number', function (err, result) {
            if(result.number !== '3') {
                resolve(result.number);
            }else {
                callback();
            }
        });
    });
};
var promptOperation = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('operation', function (err, result) {
            if(result.operation !== '4') {
                resolve(result.operation);
            }else {
                callback();
            }
        });
    });
};

module.exports = {
    promptSweet : promptSweet,
    promptSort : promptSort,
    promptOperation : promptOperation
}