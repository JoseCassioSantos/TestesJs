setInterval(function(){
    
    let novaHora = new Date();
    let data = new Date()
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Augosto", "Setembro", "Outubro", "Nov", "Dezembro"];
    let semana = ["Domingo", "segunda-feira","terça-feira","quarta-feira","quinta-feira", "sexta-feira","Sabado"]

    let dia = data.getDate();
    let mes = meses[data.getMonth()];
    let ano = novaHora.getFullYear();
    let dsemana = semana[data.getDay()];

    
    

    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    
    minuto = zero(minuto);
    segundo = zero(segundo);
    
    

    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').innerHTML = +hora+':'+minuto+':'+segundo+' <br> '+dia+'/'+mes+'/'+ano;
    document.getElementById('overhora').innerHTML = +hora+':'+minuto+':'+segundo ;
    document.getElementById('overdata').innerHTML = dsemana +', '+''+dia+' '+mes+' '+ano;
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


var elem = document.documentElement;

function full(){

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      document.getElementById('btnfull').style.display = 'none'
      document.getElementById('btnffull').style.display ='inline'

    } 

    function nfull() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
        document.getElementById('btnffull').style.display = 'none'
        document.getElementById('btnfull').style.display = 'inline'
      }



