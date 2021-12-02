function save() {
    var txnota = document.getElementById('txtnotas')
    var notas = txnota.value

    if (typeof (Storage) !== "undefined") {
        localStorage.save = notas

        alert("Salvo!!!")

    } else {

        alert("Não suportado")
    }


}




function apaga(){
    localStorage.removeItem('save')
    var res = document.getElementById('txtnotas')
    res.innerHTML= ''

}


onload = function () {

    var res = document.getElementById('txtnotas')
    res.innerHTML = (localStorage.getItem('save'))

}




function copy() {
  
  var copyText = document.getElementById("txtnotas");

  
  copyText.select();
  copyText.setSelectionRange(0, 99999); 


  navigator.clipboard.writeText(copyText.value);
  
  
}