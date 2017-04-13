var Gift = function (price, weight, quantity) {
	this.price = price;
	this.weight = weight;
	this.quantity = quantity;
};
Gift.prototype.getItemPrice = function () {
	return this.price;
};
Gift.prototype.getItemWeight = function () {
	return this.weight;
};
Gift.prototype.getItemQuantity = function () {
	return this.quantity;
};

module.exports = {
    Gift : Gift
}