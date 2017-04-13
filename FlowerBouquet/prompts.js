var prompt = require('prompt');
var promptColor = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('color', function (err, result) {
            if(result.color !== '4') {
                resolve(result.color);
            }else {
                callback();
            }
        });
    });
};
var promptChoice = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('choice', function (err, result) {
            if(result.choice !== '4') {
                resolve(result.choice);
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
var promptDetail = function () {
    return new Promise (function (resolve, reject) {
        prompt.get(['name', 'quantity'], function (err, result) {
            resolve([result.name, result.quantity]);
        });
    });
};

module.exports = {
    promptColor : promptColor,
    promptChoice : promptChoice,
    promptOperation : promptOperation,
    promptDetail : promptDetail
}