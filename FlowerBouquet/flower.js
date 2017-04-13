var parent = require('./bouquet.js'),
    firstChild = require('./category.js');

var Flower = function (name, quantity, color) {
	firstChild.Category.apply(this, arguments);
};

Flower.prototype = firstChild.Category.prototype;
Flower.uber = parent.Bouquet.prototype;
Flower.prototype.constructor = Flower;

var bouquet = new Flower('Rose', 3, 'Red');

module.exports = {
    Flower : Flower,
    bouquet : bouquet
}