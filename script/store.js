function Adicionar(){

    document.getElementById("pop").style.display = "block";

}

function Send(){

    let txtNome = document.getElementById("txtN")
    let txtLink = document.getElementById("txtL")

    let nome = txtNome.value
    let nomeK = txtNome.value
    let link = txtLink.value

    localStorage.setItem( nomeK , link )

    

    document.getElementById("pop").style.display = "none";

}