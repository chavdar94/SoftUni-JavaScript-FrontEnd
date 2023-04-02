function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);
	const textArea = document.querySelector('#inputs > textarea')
	const bestRestaurant = document.querySelector('#bestRestaurant > p')
	const workers = document.querySelector('#workers > p')
	let restaurantsMap = {}
	bestRestaurant.textContent = ''
	workers.textContent = ''
	let averageSalary = 0
	let bestSalary = 0

	function findBestRestaurant() {
		let bestRestaurant = null
		let avgSalary = 0

		for (const restaurant in restaurantsMap) {
			let currentSum = 0
			let salaries = Object.values(restaurantsMap[restaurant])
			for (const salary of salaries) {
				currentSum += salary
				if (salary > bestSalary) {
					bestSalary = salary
				}
			}
			currentSum /= salaries.length
			if (currentSum > avgSalary) {
				avgSalary = currentSum
				bestRestaurant = restaurant
				averageSalary = currentSum
			}
		}
		return bestRestaurant
	}

	function onClick() {
		let input = textArea.value

		let restaurants = Array.from(JSON.parse(input))
		for (const restaurant of restaurants) {
			let [name, workers] = restaurant.split(' - ')
			if (!restaurantsMap.hasOwnProperty(name)) {
				restaurantsMap[name] = {}
			}
			workers.split(', ').map(x => {
				let [workerName, salary] = x.split(' ')
				restaurantsMap[name][workerName] = Number(salary)
			})
		}
		const restaurantName = findBestRestaurant()
		bestRestaurant.textContent = `Name: ${restaurantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`

		let sortedWorkers = Object.entries(restaurantsMap[restaurantName])
			 .sort((a, b) => b[1] - a[1])
		for (const [worker, salary] of sortedWorkers) {
			workers.textContent += `Name: ${worker} With Salary: ${salary} `
		}

	}
}