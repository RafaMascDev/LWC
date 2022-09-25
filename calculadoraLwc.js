import { LightningElement,api } from 'lwc';

export default class Exercicio1Calculadora extends LightningElement {
    visivel=false;
    @api PrimeiroNumero;
    @api PegundoNumero;
    resultadoDaOperacao;
    handleNumberOeChange(event) {
        this.PrimeiroNumero = parseFloat(event.target.value);
    }
    
    handleNumberTwoChange(event) {
        this.SegundoNumero = parseFloat(event.target.value);
    }
    Somar() {
        this.resultadoDaOperacao = (this.PrimeiroNumero + this.SegundoNumero).toFixed(2);
    }
    Multiplicar() {
        this.resultadoDaOperacao = (this.PrimeiroNumero * this.SegundoNumero).toFixed(2);
    }
    Subtrair() {
        this.resultadoDaOperacao = (this.PrimeiroNumero - this.SegundoNumero).toFixed(2);
    }
    Dividir() {
 
        if(this.SegundoNumero == 0){
            alert("Não pode fazer divisão por zero");
        } else {
        this.resultadoDaOperacao = (this.PrimeiroNumero / this.SegundoNumero).toFixed(2);
        }
    }
    Calcular() {
        this.visivel=true; 
        console.log("ver calculardora");
    }
    Limpar(){
        this.visivel=false;
}

handleClickDelet(){
    this.visivel=false;
    this.template.querySelector('.primeiroValor').value = '';
    this.template.querySelector('.segundoValor').value = '';
}

 
    

}
