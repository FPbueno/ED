function comparador(n1:number,n2:number){
    switch(true){
        case n1 > n2:
            console.log(`O número ${n1} é maior que o número ${n2}.`);
            break;
        case n1 == n2:
            console.log(`O número ${n1} é igual ao número ${n2}.`);
            break; 
        default:
            console.log(`O número ${n1} é menor que o número ${n2}.`);
            break;   
    }   
}

export default comparador;

//no caso do codigo o default ele faz o papel de um retorno false mas ele não tem relação com isso pois o codigo só é executado porque não foi retornado nem a primeira expressão e nem a segunda então ele é meio que como se fosse um valor padrão caso nenhuma das exigencias for atendida, diferentemente do if-else que sim tem uma resposta para caso retorne false;