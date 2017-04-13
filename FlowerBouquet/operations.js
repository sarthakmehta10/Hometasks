var prompts = require('./prompts.js'),
    filter = require('./filter.js'),
    sorting = require('./sort.js'),
    cost = require('./cost.js');

var runner = function () {
	console.log('Choose operations\n' + '1. Filter by color\n' +
			'2. Sort By Price\n' + '3. Bouquet cost\n' + '4.Exit');
	prompts.promptOperation(function () {
		console.log('Exited');
	})
	.then(function (operation) {
		switch(operation) {
		case '1' :
            filter.colorFilter();
            break;
        case '2' :
            sorting.sortByPrice();
            break;
        case '3':
            cost.totalCost();
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

module.exports = {
    runner : runner
}