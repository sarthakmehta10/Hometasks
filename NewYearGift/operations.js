var prompts = require('./npmPrompt.js'),
    filterDetails = require('./filter.js'),
    sorting = require('./sort.js'),
    weight = require('./weight.js');

var runner = function () {
	console.log('Choose operations\n' + '1. Filter Details\n' +
			'2. Sorting\n' + '3. Gift Weight\n' + '4.Exit');
	prompts.promptOperation(function () {
		console.log('Exited');
	})
	.then(function (operation) {
		switch(operation) {
		case '1' :
            filterDetails.filter();
            break;
        case '2' :
            sorting.sort();
            break;
        case '3':
        	weight.giftWeight();
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