alert('Open the development tool!')

/**
 * 税金を考慮して料金を返す
 * @param {int} price 
 * @returns int
 */
function calculateTaxes(price) {
	return price *= 1.08;
}

const coffee = {
	name: 'Chocolate Mocha',
	size: 350,
	price: 300,
	isHot: true,
	toppings: ['Cinnamon', 'Caramel'],
	nutrition: {
		calories: 430,
		sugars: 53,
		caffeine: 100
	}
}
console.log(coffee.name);
console.log(calculateTaxes(coffee.price))
