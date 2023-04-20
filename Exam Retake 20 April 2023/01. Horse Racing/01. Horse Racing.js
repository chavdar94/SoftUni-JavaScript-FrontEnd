function solve(array) {
	const horses = array.shift().split('|')
	let is_finished = false

	for (const line of array) {
		if (line === 'Finish') {
			is_finished = true
			break
		}
		const info = line.split(' ')
		const command = info[0]

		if (command === 'Retake') {
			const overtakingHorse = info[1]
			const overtakenHorse = info[2]
			const firstHorseIndex = horses.indexOf(overtakingHorse)
			const secondHorseIndex = horses.indexOf(overtakenHorse)
			if (firstHorseIndex < secondHorseIndex) {
				swapHorses(firstHorseIndex, secondHorseIndex)
				console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
			}

		} else if (command === 'Rage') {
			const horse = info[1]
			const idx = horses.indexOf(horse)
			horses.splice(idx, 1)
			horses.splice(idx + 2, 0, horse)
			console.log(`${horse} rages 2 positions ahead.`)

		} else if (command === 'Trouble') {
			const horse = info[1]
			const idx = horses.indexOf(horse)
			if (idx > 0) {
				horses.splice(idx, 1)
				horses.splice(idx - 1, 0, horse)
				console.log(`Trouble for ${horse} - drops one position.`)
			}

		} else if (command === 'Miracle') {
			const lastHorse = horses.shift()
			horses.push(lastHorse)
			console.log(`What a miracle - ${lastHorse} becomes first.`)
		}
	}

	if (is_finished) {
		console.log(horses.join('->'))
	}
	const winner = horses.length - 1
	console.log(`The winner is: ${horses[winner]}`)

	function swapHorses(index1, index2) {
		let temp = horses[index1];
		horses[index1] = horses[index2];
		horses[index2] = temp;
	}
}


solve((['Fancy|Lilly',
	'Retake Lilly Fancy',
	'Trouble Lilly',
	'Trouble Lilly',
	'Finish',
	'Rage Lilly']))