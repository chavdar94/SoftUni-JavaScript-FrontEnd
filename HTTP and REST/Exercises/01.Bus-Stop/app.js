async function getInfo() {
    const stopId = document.getElementById('stopId')
    const stopName = document.getElementById('stopName')
    const bussesContainer = document.getElementById('buses')
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'

    let stopIdValue = stopId.value
    bussesContainer.innerHTML = ''
    try {
        const response = await fetch(`${BASE_URL}${stopIdValue}`)
        const data = await response.json()
        stopName.textContent = data.name
        for (const key in data.buses) {
            const li = document.createElement('li')
            li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`
            bussesContainer.appendChild(li)
        }
    } catch (err) {
        stopName.textContent = 'Error'
    }
}