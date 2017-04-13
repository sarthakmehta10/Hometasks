var unsortedPrice = [],
    prompts = require('./prompts.js'),
    child = require('./flower.js'),
    test = require('./operations.js');

var sortByPrice = function () {
	console.log('Choose category from the list \n' +
			'1. Garden \n' + '2. Lawn \n' + '3. Pot \n' + '4. Go Back');
	prompts.promptChoice(function () {
        test.runner();
    })
	.then(function (category) {
        switch (category) {
            case '1' :
                child.bouquet.setPrice(60);
                unsortedPrice.push(child.bouquet.getPrice());
                break;
            case '2' :
                child.bouquet.setPrice(80);
                unsortedPrice.push(child.bouquet.getPrice());
                break;
            case '3' :
                child.bouquet.setPrice(40);
                unsortedPrice.push(child.bouquet.getPrice());
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

module.exports = {
    sortByPrice : sortByPrice
}