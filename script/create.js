function btnAdd(){
    var nome = window.prompt('Nome do link')
    var link = window.prompt('Insira o link')
    
    var att = document.createAttribute('href')
    var tar = document.createAttribute('target')
    tar.value = '_blank'
    att.value = link
    var btn = document.createElement('a')
    btn.innerHTML = nome 
    btn.setAttributeNode(att)
    btn.setAttributeNode(tar)
    document.body.appendChild(btn)

}

//localStorage.setItem("Nome","cassio")

//var vnome = localStorage.getItem("Nome")

//document.write(vnome)