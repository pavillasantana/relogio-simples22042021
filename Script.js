function carregar() {
    var msg = window.document.getElementById ("msg")
    var img = window.document.getElementById ("img")
    var data = new Date
    var hora =  data.getHours()
    var minuto = data.getMinutes()
       msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
   
    if(hora>= 0 && hora < 12){
       //Bom dia!
       img.src = "manha.jpg"
       document.body.style.background = '#FFA500'
   }
    else if(hora >= 12 && hora < 18) {
           // Boa Tarde!
           img.src = 'tarde.jpg.jpg'
           document.body.style.background = '#CD5C5C'
    }
    else  {
        // Boa Noite!
        img.src = 'noite.jpg.jpg'
        document.body.style.background = '#FFD700';
        

    } 
}