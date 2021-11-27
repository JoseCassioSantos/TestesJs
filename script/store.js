function Adicionar(){

    document.getElementById("pop").style.display = "block";

}

function Send(){

    let txtNome = document.getElementById("txtN")
    let txtLink = document.getElementById("txtL")

    let nome = txtNome.value
    let nomeK = txtNome.value
    let link = txtLink.value

    localStorage.setItem( nomeK,link )


    document.getElementById("pop").style.display = "none";

}

onload = function(){

    let url = localStorage.cassio

    let att = document.createAttribute('href')
    let tar = document.createAttribute('target')
    tar.value = '_blank'
    att.value =  url

    nome = localStorage.cassio[15]

    let btn = document.createElement('a')
    btn.innerHTML = nome 
    btn.setAttributeNode(att)
    btn.setAttributeNode(tar)
    document.body.appendChild(btn)

}