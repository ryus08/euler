var fibgen = require('../../lib/fibgen');

module.exports = function()
{
	sum = 0;
	for (var n of fibgen()) {
		if (n > 4000000) {
			return Promise.resolve(sum);
		}
		if (n%2 === 0){
			sum += n;
		}
	}
}

if (require.main === module) {
    module.exports().then(console.log);
}
