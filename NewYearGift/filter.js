var prompts = require('./npmPrompt.js'),
    objects = require('./objects.js'),
    test = require('./operations.js');

var filter = function () {
	console.log('Choose sweets from the list to filter the details \n' +
			'1. Chocolate \n' + '2. Cake \n' + '3. Candy \n' + '4. Go Back');
	prompts.promptSweet(function () {
        test.runner();
    })
        .then(function (option) {
        switch (option) {
		case '1' :
			console.log('Gift can have ' + objects.sweetOne.getItemQuantity() + ' chocolates.');
			console.log('Each chocolate weighs : ' + objects.sweetOne.getItemWeight() + ' grams.');
            filter();
			break;
		case '2' :
			console.log('Gift can have ' + objects.sweetTwo.getItemQuantity() + ' cakes.');
			console.log('Each cake weighs : ' + objects.sweetTwo.getItemWeight() + ' grams.');
            filter();
			break;
		case '3' :
			console.log('Gift can have ' + objects.sweetThree.getItemQuantity() + ' candies.');
			console.log('Each candy weighs : ' + objects.sweetThree.getItemWeight() + ' grams.');
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

module.exports = {
    filter : filter
}