function attachEventsListeners() {
    const inputDistance = document.querySelector('#inputDistance')
    const outputDistance = document.querySelector('#outputDistance')
    const inputUnits = document.querySelector('#inputUnits')
    const outputUnits = document.querySelector('#outputUnits')
    const convertButton = document.querySelector('#convert')


    convertButton.addEventListener('click', () => {
        const units = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }

        const fromDistance = Number(inputDistance.value) * units[inputUnits.value]
        outputDistance.disabled = false
        outputDistance.value = fromDistance / units[outputUnits.value]
    })
}