//New Year gift using Modern Pattern
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

var chocolate = new Gift(100, 150, 5);
var cake = new Gift(300, 2500, 1);
var candy = new Gift(50, 5, 30);

var sweetOne = object(chocolate);
var	sweetTwo = object(cake);
var sweetThree = object(candy);

function object (sweet) {
	function NewYear () {};
	NewYear.prototype = sweet;
	return new NewYear();
};

var weight = 0,
    priceList = [sweetOne.getItemPrice(), sweetTwo.getItemPrice(), sweetThree.getItemPrice()],
	weightList = [sweetOne.getItemWeight(),
	              sweetTwo.getItemWeight(),
	              sweetThree.getItemWeight()];

var prompt = require('prompt');
var promptSweet = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('sweet', function (err, result) {
            if(result.sweet !== '4') {
                resolve(result.sweet);
            }else {
                runner();
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
                runner();
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

var filter = function () {
	console.log('Choose sweets from the list to filter the details \n' +
			'1. Chocolate \n' + '2. Cake \n' + '3. Candy \n' + '4. Go Back');
	promptSweet(function () {
        console.log('Exited');
    }).then(function (option) {
        switch (option) {
		case '1' :
			console.log('Gift can have ' + sweetOne.getItemQuantity() + ' chocolates.');
			console.log('Each chocolate weighs : ' + sweetOne.getItemWeight() + ' grams.');
            filter();
			break;
		case '2' :
			console.log('Gift can have ' + sweetTwo.getItemQuantity() + ' cakes.');
			console.log('Each cake weighs : ' + sweetTwo.getItemWeight() + ' grams.');
            filter();
			break;
		case '3' :
			console.log('Gift can have ' + sweetThree.getItemQuantity() + ' candies.');
			console.log('Each candy weighs : ' + sweetThree.getItemWeight() + ' grams.');
            filter();
			break;
		default :
			console.log('Invalid choice');
            filter();
			break;
	}
    })
    .catch(function(e) {
		throw new Error(e);
	});
};

var giftWeight = function () {
	console.log('Choose sweets from the list to add in the gift \n' +
			'1. Chocolate \n' + '2. Cake \n' + '3. Candy \n' + '4. Go Back');
	promptSweet(function () {
        console.log('Exited');
    }).then(function (option) {
    	switch (option) {
    	case '1' :
    		console.log('Choose quantity of chocolates\n');
    		prompt.get('quantity', function (err, result) {
    			chocolate = new Gift(100, 150, result.quantity);
    			weight = weight + chocolate.getItemWeight() * chocolate.getItemQuantity();
    			console.log('Current gift weighs : ' + weight + ' grams.');
                giftWeight();
    		});
			break;
		case '2' :
			console.log('Choose quantity of cakes\n');
			prompt.get('quantity', function (err, result) {
    			cake = new Gift(300, 2500, result.quantity);
    			weight = weight + cake.getItemWeight() * cake.getItemQuantity();
    			console.log('Current gift weighs : ' + weight + ' grams.');
                giftWeight();
    		});
			break;
		case '3' :
			console.log('Choose quantity of candies\n');
			prompt.get('quantity', function (err, result) {
    			candy = new Gift(50, 5, result.quantity);
    			weight = weight + candy.getItemWeight() * candy.getItemQuantity();
    			console.log('Current gift weighs : ' + weight + ' grams.');
                giftWeight();
    		});
			break;
		default :
			console.log('Invalid choice');
			giftWeight();
			break;
    	}
    })
    .catch(function(e) {
		throw new Error(e);
	});
};

var sort = function () {
	console.log('Choose an option :\n' + '1. Sort Price\n' + '2. Sort Weight\n' + '3. Go back');
	promptSort()
		.then(function (option) {
			switch(option) {
			case '1' :
				var sortedPrice = priceList.sort(function (a,b) {
					return a-b;
				});
				console.log('Sorted price is : ' + sortedPrice);
				sort();
				break;
			case '2' :
				var sortedWeight = weightList.sort(function (a,b) {
					return a-b;
				});
				console.log('Sorted weight is : ' + sortedWeight);
				sort();
				break;
			default :
				console.log('Invalid option');
				sort();
				break;
			}
		})
		.catch(function(e) {
			throw new Error(e);
		});
};

var runner = function () {
	console.log('Choose operations\n' + '1. Filter Details\n' +
			'2. Sorting\n' + '3. Gift Weight\n' + '4.Exit');
	promptOperation(function () {
		console.log('Exited');
	})
	.then(function (operation) {
		switch(operation) {
		case '1' :
            filter();
            break;
        case '2' :
            sort();
            break;
        case '3':
        	giftWeight();
            break;
        default :
            console.log('Invalid choice');
            break;
		}
	})
	.catch(function(e) {
		throw new Error(e);
	});
};

runner();
