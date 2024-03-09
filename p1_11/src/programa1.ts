class MaiorMenor{
    n1:number;
    n2:number;
    constructor(n1:number,n2:number){
        this.n1 = n1;
        this.n2 = n2;
    }
    comparador(){
        if(this.n1 > this.n2){
            console.log(`O número ${this.n1} é maior que o número ${this.n2}.`);
        }
        else if(this.n1 == this.n2){
            console.log(`O número ${this.n1} é igual ao número ${this.n2}.`);
        }
        else{
            console.log(`O número ${this.n1} é menor que o número ${this.n2}.`);
        }
    }
}

const numero = new MaiorMenor(3,4);
numero.comparador();
