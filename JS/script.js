
/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


// Array delle email
let emailList = [
    "marco@bione.com",
    "admin@admin.com",
    "guest@player.com"
];
console.log(emailList);

// form listener
document.querySelector('form').addEventListener('submit', function(event) {
    // do not send the form
    event.preventDefault();
    
    // take data from form
    let newPlayer = document.getElementById('uEmail').value;
    
    // Check presence of the player
    if (emailList.indexOf(newPlayer) > -1) {
        document.getElementById('feedback').innerHTML=`
        <div class="mb-3 w-100">
            <button type="submit" id="play" class="btn btn-outline-warning mb-3">Gioca</button>
        </div>
        `;

    } else {
        //display success message
        document.getElementById('feedback').innerHTML=`
        <p class="text-primary fs-5">Sembra che te non sia registrato, che aspetti?</p>
        `;
        const newPlayer = document.getElementById("signup");
        newPlayer.addEventListener('click', register);
        console.log(emailList);
    };
});
console.log(emailList);