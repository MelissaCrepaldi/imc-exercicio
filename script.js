alert('Melissa, acho que agora vai >:(')

let campoAltura = document.querySelector('#altura')
let campoPeso = document.querySelector('#peso')
let botao = document.querySelector('#botao')
let resultado = document.querySelector('#resultado')
let imcTexto = document.querySelector('#imc')

botao.addEventListener('click', calculo) 

function calculo(){
    let pesoValor = Number(campoPeso.value)
    let alturaValor = Number(campoAltura.value)
    let imcValor = pesoValor / (alturaValor * alturaValor)

    resultado.textContent = 'Seu IMC é: ' + imcValor.toFixed(2)

    if(imcValor <= 18){
        imcTexto.textContent = 'Seu Índice de Massa Corporal é: Excesso de magreza'
    }
    else if(imcValor <= 24.9){
        imcTexto.textContent = 'Seu Índice de Massa Corporal é: Peso normal'
    }
    else if(imcValor <= 29.9){
        imcTexto.textContent = 'Seu Índice de Massa Corporal é: Excesso de peso'
    }
    else if(imcValor <= 34.9){
        imcTexto.textContent = 'Seu Índice de Massa Corporal é: Obesidade (grau I)'
    }
    else if(imcValor <= 39.9){
        imcTexto.textContent = 'Seu Índice de Massa Corporal é: Obesidade (grau II)'
    }
    else{
        imcTexto.textContent = 'Seu Índice de Massa Corporal é: Obesidade (grau III)'
    }
}