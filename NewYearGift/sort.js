var prompts = require('./npmPrompt.js'),
    objects = require('./objects.js'),
    test = require('./operations.js');

var priceList = [objects.sweetOne.getItemPrice(), objects.sweetTwo.getItemPrice(), objects.sweetThree.getItemPrice()],
	weightList = [objects.sweetOne.getItemWeight(),
	              objects.sweetTwo.getItemWeight(),
	              objects.sweetThree.getItemWeight()];
var sort = function () {
	console.log('Choose an option :\n' + '1. Sort Price\n' + '2. Sort Weight\n' + '3. Go back');
	prompts.promptSort(function () {
        test.runner();
    })
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

module.exports = {
    sort : sort
}