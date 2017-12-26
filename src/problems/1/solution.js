module.exports = function()
{
	sum = 0;
	for (var i = 1; i < 1000; i++) {
		if (i%3 ===0 || i%5 === 0){
			sum += i;
		}
	}
	return Promise.resolve(sum);
}

if (require.main === module) {
    module.exports().then(console.log);
}
