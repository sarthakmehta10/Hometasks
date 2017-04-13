var sum = 0,
    prompts = require('./prompts.js'),
    child = require('./flower.js'),
    test = require('./operations.js');

var bouquetCost = function () {
	sum = sum + child.bouquet.getPrice() * child.bouquet.getQuantity();
	return sum;
};

var totalCost = function () {
    console.log('Choose category \n' + '1. Garden\n' + '2. Pot\n' + '3. Lawn\n' + '4. Go Back\n');
    prompts.promptChoice(function () {
        test.runner();
    })
    .then(function (text) {
        switch(text) {
            case '1' :
                child.bouquet.setPrice(60);
                console.log('Enter name and its quantity \n' + '1. Rose\n' + '2. Lilly\n');
                return prompts.promptDetail();
                break;
            case '2' :
                child.bouquet.setPrice(40);
                console.log('Enter name and its quantity \n' + '1. Sunflower\n' + '2. Daisy\n');
                return prompts.promptDetail();
                break;
            case '3' :
                child.bouquet.setPrice(80);
                console.log('Enter name and its quantity \n' + '1. Lotus\n' + '2. Petunia\n');
                return prompts.promptDetail();
                break;
            default :
                console.log('Invalid choice');
                break;
        }
    })
    .then(function (text) {
        switch(text[0]) {
            case 'Rose' :
                child.bouquet.setColor('Red');
                child.bouquet.setQuantity(text[1]);
                console.log('Current cost is : ' + bouquetCost());
                break;
            case 'Lilly' :
                child.bouquet.setColor('White');
                child.bouquet.setQuantity(text[1]);
                console.log('Current cost is : ' + bouquetCost());
                break;
            case 'Sunflower' :
                child.bouquet.setColor('Yellow');
                child.bouquet.setQuantity(text[1]);
                console.log('Current cost is : ' + bouquetCost());
                break;
            case 'Daisy' :
                child.bouquet.setColor('White');
                child.bouquet.setQuantity(text[1]);
                console.log('Current cost is : ' + bouquetCost());
                break;
            case 'Lotus' :
                child.bouquet.setColor('White');
                child.bouquet.setQuantity(text[1]);
                console.log('Current cost is : ' + bouquetCost());
                break;
            case 'Petunia' :
                child.bouquet.setColor('Yellow');
                child.bouquet.setQuantity(text[1]);
                console.log('Current cost is : ' + bouquetCost());
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

module.exports = {
    totalCost : totalCost
}