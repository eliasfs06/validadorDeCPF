import ValidaCPF from "./modules/ValidaCPF.js";

const divResultado = document.querySelector('.resultado')
const inputCPF = document.querySelector('#inputCPF');

document.addEventListener('submit', (e) => {
    e.preventDefault();
    divResultado.innerHTML = "";
    let cpf = new ValidaCPF(inputCPF.value);
    if(cpf.valida() === true){
        divResultado.classList.remove('invalido');
        divResultado.classList.add('valido');
        divResultado.innerHTML = 'CPF válido';
    } else if(cpf.valida() === false) {
        divResultado.classList.remove('valido');
        divResultado.classList.add('invalido');
        divResultado.innerHTML = 'CPF inválido';
    }
})