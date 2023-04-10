function solve(array) {
	const n = Number(array.shift())
	const sprintBoard = {}

	const points = {
		'ToDo': 0,
		'In Progress': 0,
		'Code Review': 0,
		'Done': 0
	}

	for (let i = 0; i < n; i++) {
		[assignee, taskId, title, status, estimatedPoints] = array.shift().split(':')
		if (!sprintBoard.hasOwnProperty(assignee)) {
			sprintBoard[assignee] = []
		}
		sprintBoard[assignee].push({taskId, title, status, estimatedPoints})
	}

	for (const line of array) {
		const task = line.split(':')
		const command = task[0]
		const assignee = task[1]

		if (command === 'Add New') {
			if (!sprintBoard.hasOwnProperty(assignee)) {
				console.log(`Assignee ${assignee} does not exist on the board!`)
			} else {
				const taskId = task[2]
				const title = task[3]
				const status = task[4]
				const estimatedPoints = task[5]
				sprintBoard[assignee].push({taskId, title, status, estimatedPoints})
			}
		} else if (command === 'Change Status') {
			const taskId = task[2]
			const newStatus = task[3]
			if (!sprintBoard.hasOwnProperty(assignee)) {
				console.log(`Assignee ${assignee} does not exist on the board!`)
			} else {
				checkId(assignee, taskId, newStatus)
			}
		} else if (command === 'Remove Task') {
			const index = Number(task[2])
			if (!sprintBoard.hasOwnProperty(assignee)) {
				console.log(`Assignee ${assignee} does not exist on the board!`)
			} else if (!sprintBoard[assignee].hasOwnProperty(index)) {
				console.log('Index is out of range!')
			} else {
				sprintBoard[assignee].splice(index, 1)
			}
		}

	}

	for (const key in sprintBoard) {
		for (const obj of sprintBoard[key]) {
			points[obj.status] += Number(obj.estimatedPoints)
		}
	}

	for (const pointsKey in points) {
		if (pointsKey === 'Done') {
			console.log(`Done Points: ${points[pointsKey]}pts`)
		} else {
			console.log(`${pointsKey}: ${points[pointsKey]}pts`)
		}
	}

	const othersSum = points['In Progress'] + points['Code Review'] + points['ToDo']
	console.log(points['Done'] >= othersSum ? 'Sprint was successful!' : 'Sprint was unsuccessful...')

	function checkId(assignee, taskId, newStatus) {
		let isSame = false
		const assigneeCheck = sprintBoard[assignee]
		for (const task of assigneeCheck) {
			if (task['taskId'] === taskId) {
				task['status'] = newStatus
				isSame = true
			}
		}
		if (!isSame) {
			console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
		}
	}
}

solve([
	'5',
	'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
	'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
	'Peter:BOP-1211:POC:Code Review:5',
	'Georgi:BOP-1212:Investigation Task:Done:2',
	'Mariya:BOP-1213:New Account Page:In Progress:13',
	'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
	'Change Status:Peter:BOP-1290:ToDo',
	'Remove Task:Mariya:1',
	'Remove Task:Joro:1',
])
