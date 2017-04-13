var prompts = require('./npmPrompt.js'),
    gift = require('./giftConstructor.js'),
    objects = require('./objects.js'),
    prompt = require('prompt'),
    test = require('./runner.js'),
    weight = 0;

var giftWeight = function () {
	console.log('Choose sweets from the list to add in the gift \n' +
			'1. Chocolate \n' + '2. Cake \n' + '3. Candy \n' + '4. Go Back');
	prompts.promptSweet(function () {
        test.runner();
    })
        .then(function (option) {
    	switch (option) {
    	case '1' :
    		console.log('Choose quantity of chocolates\n');
    		prompt.get('quantity', function (err, result) {
    			chocolate = new gift.Gift(100, 150, result.quantity);
    			weight = weight + chocolate.getItemWeight() * chocolate.getItemQuantity();
    			console.log('Current gift weighs : ' + weight + ' grams.');
                giftWeight();
    		});
			break;
		case '2' :
			console.log('Choose quantity of cakes\n');
			prompt.get('quantity', function (err, result) {
    			cake = new gift.Gift(300, 2500, result.quantity);
    			weight = weight + cake.getItemWeight() * cake.getItemQuantity();
    			console.log('Current gift weighs : ' + weight + ' grams.');
                giftWeight();
    		});
			break;
		case '3' :
			console.log('Choose quantity of candies\n');
			prompt.get('quantity', function (err, result) {
    			candy = new gift.Gift(50, 5, result.quantity);
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

module.exports = {
    giftWeight : giftWeight
}