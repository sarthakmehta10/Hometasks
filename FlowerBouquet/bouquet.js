var Bouquet = function (name, quantity, color) {
	this.name = name;
	this.quantity = quantity || 0;
	this.color = color;
	this.setName = function (newName) {
		this.name = newName;
	};
	this.setColor = function (newColor) {
		this.color = newColor;
	};
    this.setQuantity = function (newQuantity) {
        this.quantity = newQuantity;
    };
};
Bouquet.prototype.getName = function () {
	return this.name;
};
Bouquet.prototype.getQuantity = function () {
	return this.quantity;
};
Bouquet.prototype.getColor = function () {
	return this.color;
};

module.exports = {
    Bouquet : Bouquet
}