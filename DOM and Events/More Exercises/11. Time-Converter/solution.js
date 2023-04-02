function attachEventsListeners() {
	const inputs = Array.from(document.querySelectorAll('input[type=text]'))
	const [days, hours, minutes, seconds] = inputs
	const [daysBtn, hoursBtn, minutesBtn, secondsBtn] = document.querySelectorAll('input[type=button]')
	const inputValues = {
		'days': days.value,
		'hours': hours.value,
		'minutes': minutes.value,
		'seconds': seconds.value
	}

	function parseValues() {
		for (let input of inputs) {
			input.value = inputValues[input.id]
		}
	}

	daysBtn.addEventListener('click', convertFromDays)
	hoursBtn.addEventListener('click', convertFromHours)
	minutesBtn.addEventListener('click', convertFromMinutes)
	secondsBtn.addEventListener('click', convertFromSeconds)

	function convertFromDays() {
		for (const key in inputValues) {
			inputValues['days'] = days.value
			inputValues['hours'] = days.value * 24
			inputValues['minutes'] = days.value * 1440
			inputValues['seconds'] = days.value * 86400
		}
		parseValues()
	}

	function convertFromHours() {
		for (const key in inputValues) {
			inputValues['days'] = hours.value / 24
			inputValues['hours'] = hours.value
			inputValues['minutes'] = (hours.value / 24) * 1440
			inputValues['seconds'] = (hours.value / 24) * 86400
		}
		parseValues()
	}

	function convertFromMinutes() {
		for (const key in inputValues) {
			inputValues['days'] = minutes.value / 24
			inputValues['hours'] = minutes.value / 60
			inputValues['minutes'] = minutes.value
			inputValues['seconds'] = minutes.value * 60
		}
		parseValues()
	}

	function convertFromSeconds() {
		for (const key in inputValues) {
			inputValues['days'] = seconds.value / 60/ 60 / 24
			inputValues['hours'] = seconds.value / 60 / 60
			inputValues['minutes'] = seconds.value / 60
			inputValues['seconds'] = seconds.value
		}
		parseValues()
	}
}