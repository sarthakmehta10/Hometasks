var gift = require('./giftConstructor.js');

function object (sweet) {
	function NewYear () {};
	NewYear.prototype = sweet;
	return new NewYear();
};
var chocolate = new gift.Gift(100, 150, 5),
    cake = new gift.Gift(300, 2500, 1),
    candy = new gift.Gift(50, 5, 30),
    sweetOne = object(chocolate),
	sweetTwo = object(cake),
    sweetThree = object(candy);

module.exports = {
    chocolate : chocolate,
    cake : cake,
    candy : candy,
    object : object,
    sweetOne : sweetOne,
	sweetTwo : sweetTwo,
    sweetThree : sweetThree
}