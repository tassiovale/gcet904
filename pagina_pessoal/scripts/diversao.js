function exibirSurpresa() {
    // Localizar elemento do campo de texto na página
    const inputNome = document.getElementById('nome');
    const nome = inputNome.value;  // Obter o valor digitado pelo usuário
    
    const surpresa = document.getElementById('surpresa');
    surpresa.textContent = `Olá, ${nome}! Surpresa!`;
}

const spanSurpresa = document.querySelector('.titulo-surpresa');
spanSurpresa.addEventListener('click', () => {
    alert('Qual surpresa você gostaria de ver?');
});

const inputNome = document.getElementById('nome');
inputNome.addEventListener('input', () => {
    console.log(`O nome digitado é: ${inputNome.value}`);
});

const button = document.querySelector('button');
button.addEventListener('focus', () => {
    console.log('O botão recebeu foco!');
});
button.addEventListener('blur', () => {
    console.log('O botão perdeu foco!');
});

const titulo = document.querySelector('h1');
titulo.addEventListener('mouseover', () => {
    titulo.style.color = 'red';
});
titulo.addEventListener('mouseout', () => {
    titulo.style.color = 'black';
});

// Teclado
document.addEventListener('keydown', (e) => {
    console.log('Tecla pressionada:', e.key);
    if (e.key === 'Enter') {
        alert('Apertou Enter!');
    }
});