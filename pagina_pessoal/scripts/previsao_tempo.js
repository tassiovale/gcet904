async function obterPrevisao() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    await buscarPrecisaoDoTempo(latitude, longitude);
}

async function buscarPrecisaoDoTempo(latitude, longitude) {
    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    const temperatura = dados.current.temperature_2m;
    const previsaoElement = document.getElementById('previsao');
    previsaoElement.innerHTML = `<span>A temperatura atual é ${temperatura}°C.</span>`;
}