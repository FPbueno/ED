Questão P1.11{
    Escreva dois programas equivalentes, em TypeScript, que solicitem que o usuário digite
    dois números, n1 e n2. O programa deve dizer se o n1 é “menor ou igual a n2” ou se é “maior
    do que n2”. Um programa deve utilizar o bloco switch e o outro deve utilizar if-else. Qual
    dificuldade surgiria caso se desejasse que o programa discriminasse 3 condições (>, <ou=)?
};

Resposta:{
    Em resumo, o if-else é mais flexível e pode lidar com uma variedade maior de condições complexas, enquanto o switch(true) é mais útil quando você deseja avaliar uma expressão em vários casos diferentes de forma mais direta pois ele só retorna true como resposta.

    Exemplificação: A instrução if-else permite que você escolha qual dos dois caminhos de código seguir com base em uma expressão booleana. A instrução switch seleciona uma lista de instruções a ser executada com base em uma correspondência de padrão com uma expressão.

    (No caso do if-else ele tem um resposta para o true e o false enquanto no switch (true) ele só retornará uma resposta se o valor booleano for true caso for false ele não executará nada)};

Modo de execução: {escrever no terminal npm run p1 para rodar o primeiro programa e npm run p2 para rodar o segundo programa};