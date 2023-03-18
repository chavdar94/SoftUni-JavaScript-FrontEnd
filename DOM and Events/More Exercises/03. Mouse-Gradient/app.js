function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');


    gradient.addEventListener('mouseout', () => {
        result.textContent = '';
    });

    gradient.addEventListener('mousemove', (event) => {
        const x = Number((event.offsetX / gradient.clientWidth) * 100)
        result.textContent = `${Math.floor(x)}%`
    });
}
