var prompts = require('./prompts.js'),
    child = require('./flower.js'),
    test = require('./operations.js');

var colorFilter = function () {
	console.log('Choose color from the list \n' +
			'1. White \n' + '2. Red \n' + '3. Yellow \n' + '4. Go Back');
	prompts.promptColor(function () {
        test.runner();
    }).then(function (choice) {
        switch (choice) {
		case '1' :
			child.bouquet.setName(['Daisy', 'Lilly', 'Lotus']);
			console.log('All White flowers are : ' + child.bouquet.getName());
            colorFilter();
			break;
		case '2' :
			child.bouquet.setName(['Rose']);
			console.log('All Red flowers are : ' + child.bouquet.getName());
            colorFilter();
			break;
		case '3' :
			child.bouquet.setName(['Sunflower', 'Petunia']);
			console.log('All Yellow flowers are : ' + child.bouquet.getName());
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

module.exports = {
    colorFilter : colorFilter
}