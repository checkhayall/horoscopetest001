function getHoroscope() {
    const sign = document.getElementById('sign').value;
    fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        const horoscopeElement = document.getElementById('horoscope');
        horoscopeElement.innerHTML = `
            <p>星座: ${sign}</p>
            <p>今日の運勢: ${data.description}</p>
            <p>幸運の色: ${data.color}</p>
            <p>幸運の数字: ${data.lucky_number}</p>
            <p>幸運の時間: ${data.lucky_time}</p>
        `;
    })
    .catch(error => console.error('Error:', error));
}
