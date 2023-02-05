const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    // console.log('Buscando el Clima...');

    //* Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    // console.log(ciudad);
    // console.log(pais);

    if (ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');

        return
    }
    
}

function mostrarError(mensaje) {
    console.log(mensaje);

    //* Crear una alerta
    const alerta = document.createElement('div');

    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
}