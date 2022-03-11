export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function (){ 
                return cpfEnviado.replace(/\D+/g, '');
            }
        });
    }
    valida() {
        if (this.cpfLimpo === undefined) return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencial()) return false;
        return this.cpfParcial();
    }
    isSequencial() {
        let sequencia = '';
        for(let i=0; i<11; i++){
        sequencia = sequencia + this.cpfLimpo[0];
        }
        if(sequencia === this.cpfLimpo) return true;
    }
    cpfParcial(){
        let cpfParcial = this.cpfLimpo.slice(0, -2);
        let digito1 = ValidaCPF.geraDigito(cpfParcial);
        let digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        cpfParcial = cpfParcial + digito1 + digito2;
        return this.cpfLimpo === cpfParcial;
    }
    static geraDigito(cpfParcial) {
        let arrayCpf = Array.from(cpfParcial);
        let total = arrayCpf.reduce((ac, v, i) => {
            ac += Number(v) * ((arrayCpf.length+1) - i);
            return ac;
        }, 0);
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}

  
