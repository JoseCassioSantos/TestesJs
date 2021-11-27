function save() {
    var txnota = document.getElementById('txtnotas')
    var notas = txnota.value

    if (typeof (Storage) !== "undefined") {
        localStorage.save = notas

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

