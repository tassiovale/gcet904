// console.log(1);
// console.log(2);
// console.log(3);

const minhaPromise = new Promise(
    (resolve, reject) => {
        const sucesso = true;
        setTimeout(() => {
            if (sucesso) {
                resolve('Deu certo!');
            } else {
                reject('Deu erro!');
            }
        }, 2000);
    }
);

minhaPromise.
    then((resultado) => {
        console.warn(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    });

console.log('Depois da promise');