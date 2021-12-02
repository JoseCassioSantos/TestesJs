function tip() {
  
    var copyText = document.getElementById("tip1");
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
  
    navigator.clipboard.writeText(copyText.value);
    
    window.alert("Copiado")
    
  }