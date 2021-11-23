setInterval(function(){
    
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    let dia = novaHora.getUTCDay();
    let mes = novaHora.getMonth();
    let ano = novaHora.getUTCFullYear();
    

    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    
    minuto = zero(minuto);
    segundo = zero(segundo);
    dia = zero(dia)
    mes = zero(mes)
    

    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo+' | '+dia+'/'+mes+'/'+ano;
},1000)

// A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}