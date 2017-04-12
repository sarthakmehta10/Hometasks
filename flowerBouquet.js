// Flower Bouquet using Classical Pattern
var unsortedPrice = [],
	sum = 0;

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

var Category = function (name, quantity) {
	this.price = 60;
	Bouquet.apply(this, arguments);
	this.getPrice = function () {
		return this.price;
	};
	this.setPrice = function (newPrice) {
		this.price = newPrice;
	}
};
Category.prototype = Bouquet.prototype;

var Flower = function (name, quantity, color) {
	Category.apply(this, arguments);
};

Flower.prototype = Category.prototype;
Flower.uber = Bouquet.prototype;
Flower.prototype.constructor = Flower;

var bouquet = new Flower('Rose', 3, 'Red');

var prompt = require('prompt');
var promptColor = function (callback) {
    return new Promise (function (resolve, reject) {
        prompt.get('color', function (err, result) {
            if(result.color !== '4') {
                resolve(result.color);
            }else {
                runner();
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
var promptDetail = function () {
    return new Promise (function (resolve, reject) {
        prompt.get(['name', 'quantity'], function (err, result) {
            resolve([result.name, result.quantity]);
        });
    });
};

var bouquetCost = function () {
	sum = sum + bouquet.getPrice() * bouquet.getQuantity();
	return sum;
};

var colorFilter = function () {
	console.log('Choose color from the list \n' +
			'1. White \n' + '2. Red \n' + '3. Yellow \n' + '4. Go Back');
	promptColor(function () {
        console.log('Exited');
    }).then(function (choice) {
        switch (choice) {
		case '1' :
			bouquet.setName(['Daisy', 'Lilly', 'Lotus']);
			console.log('All White flowers are :' + bouquet.getName());
            colorFilter();
			break;
		case '2' :
			bouquet.setName(['Rose']);
			console.log('All Red flowers are :' + bouquet.getName());
            colorFilter();
			break;
		case '3' :
			bouquet.setName(['Sunflower', 'Petunia']);
			console.log('All Yellow flowers are :' + bouquet.getName());
            colorFilter();
			break;
		default :
			console.log('Invalid choice');
            colorFilter();
			break;
	}
    })
    .catch(function(e) {
		throw new Error(e);
	});
};

var sortByPrice = function () {
	console.log('Choose category from the list \n' +
			'1. Garden \n' + '2. Lawn \n' + '3. Pot \n' + '4. Go Back');
	promptChoice()
	.then(function (category) {
        switch (category) {
            case '1' :
                bouquet.setPrice(60);
                unsortedPrice.push(bouquet.getPrice());
                break;
            case '2' :
                bouquet.setPrice(80);
                unsortedPrice.push(bouquet.getPrice());
                break;
            case '3' :
                bouquet.setPrice(40);
                unsortedPrice.push(bouquet.getPrice());
                break;
            default :
                console.log('Invalid choice');
                break;
        }
        var sortedPrice = unsortedPrice.sort(function (a, b) {
            return a-b;
        });
        console.log('Sorted Price : ' + sortedPrice);
        sortByPrice();
    })
    .catch(function(e) {
		throw new Error(e);
	});
};

var totalCost = function () {
    console.log('Choose category \n' + '1. Garden\n' + '2. Pot\n' + '3. Lawn\n' + '4. Go Back\n');
    promptChoice(function () {
        console.log('Exited');
    })
    .then(function (text) {
        switch(text) {
            case '1' :
                bouquet.setPrice(60);
                console.log('Enter name and its quantity \n' + '1. Rose\n' + '2. Lilly\n');
                return promptDetail();
                break;
            case '2' :
                bouquet.setPrice(40);
                console.log('Enter name and its quantity \n' + '1. Sunflower\n' + '2. Daisy\n');
                return promptDetail();
                break;
            case '3' :
                bouquet.setPrice(80);
                console.log('Enter name and its quantity \n' + '1. Lotus\n' + '2. Petunia\n');
                return promptDetail();
                break;
            default :
                console.log('Invalid choice');
                break;
        }
    })
    .then(function (text) {
        switch(text[0]) {
            case 'Rose' :
                bouquet.setColor('Red');
                bouquet.setQuantity(text[1]);
                console.log('Current cost is :' + bouquetCost());
                break;
            case 'Lilly' :
                bouquet.setColor('White');
                bouquet.setQuantity(text[1]);
                console.log('Current cost is :' + bouquetCost());
                break;
            case 'Sunflower' :
                bouquet.setColor('Yellow');
                bouquet.setQuantity(text[1]);
                console.log('Current cost is :' + bouquetCost());
                break;
            case 'Daisy' :
                bouquet.setColor('White');
                bouquet.setQuantity(text[1]);
                console.log('Current cost is :' + bouquetCost());
                break;
            case 'Lotus' :
                bouquet.setColor('White');
                bouquet.setQuantity(text[1]);
                console.log('Current cost is :' + bouquetCost());
                break;
            case 'Petunia' :
                bouquet.setColor('Yellow');
                bouquet.setQuantity(text[1]);
                console.log('Current cost is :' + bouquetCost());
                break;
            default :
                console.log('Invalid name');
                break;
        }
        totalCost();
})
    .catch(function(e) {
		throw new Error(e);
	});
};

var runner = function () {
	console.log('Choose operations\n' + '1. Filter by color\n' +
			'2. Sort By Price\n' + '3. Bouquet cost\n' + '4.Exit');
	promptOperation(function () {
		console.log('Exited');
	})
	.then(function (operation) {
		switch(operation) {
		case '1' :
            colorFilter();
            break;
        case '2' :
            sortByPrice();
            break;
        case '3':
            totalCost();
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