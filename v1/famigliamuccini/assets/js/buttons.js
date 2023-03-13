function instagram() {
    console.log('Usuário direcionado ao Instagram.');

    window.open('https://www.instagram.com/famigliamuccini/');
}

function whatsapp() {
    console.log('Usuário direcionado ao WhatsApp.');

    window.open("https://wa.me/5583988850719?text=Ol%C3%A1%2C+vim+do+site");
}

function pinterest() {
    console.log('Usuário direcionado ao Pinterest.');

    window.open('https://br.pinterest.com/famigliamucciniristorante/');
}


function linkedin() {
    console.log('Usuário direcionado ao Linkedin.');

    window.open('https://www.linkedin.com/company/famigliamuccini/');
}







const TXT = document.getElementById('meet')


function next() {
    TXT.innerHTML= (`
    
    <h2>Teste</h2>
         
    <div id="buttonsLine">
            <input type="button" value="Saber Mais" class="buttonB" id="nextButton">
            <input type="button" value="Avançar" class="button" id="nextButton" onclick="next()">
          </div>
    `);
}