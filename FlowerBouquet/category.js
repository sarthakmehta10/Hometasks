var parent = require('./bouquet.js');

var Category = function (name, quantity) {
	this.price = 60;
	parent.Bouquet.apply(this, arguments);
	this.getPrice = function () {
		return this.price;
	};
	this.setPrice = function (newPrice) {
		this.price = newPrice;
	}
};
Category.prototype = parent.Bouquet.prototype;

module.exports = {
    Category : Category
}