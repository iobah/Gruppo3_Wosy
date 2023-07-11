btn_info.addEventListener("click", function () {
    fetch(airtableUrlUtenti)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            btn_info.style.backgroundColor = 'rgba(105,105,105,1)';
            btn_info.style.color = 'white';
            btn_pro.style.backgroundColor = 'white';
            btn_pro.style.color = 'rgba(105,105,105,1)';
            btn_comp.style.backgroundColor = 'white';
            btn_comp.style.color = 'rgba(105,105,105,1)';
            var descrizione = data.records[0].fields.Descrizione;
            stampa_btn.innerHTML = "<h1 class='biografia'>Biografia</h1><p class='stampa_info'>" + descrizione + "</p>";
            area_info.replaceChildren(stampa_btn);
            return fetch(airtableUrlFormazione);
        })
        .then(response1 => {
            // Gestisci la risposta della prima richiesta
            return response1.json(); // Restituisce una Promise che rappresenta il corpo della risposta come JSON
        })
        .then(data1 => {
            var records = data1.records;
            stampa_btn.innerHTML += "<h1 class='istruzione'>Istruzione</h1><ul>";
            area_info.appendChild(stampa_btn);
            records.forEach(function (record) {
                var nome_scuola = record.fields.Nome_scuola;
                var livello = record.fields.livello_scolastico;
                var voto = record.fields.voto;
                var ambito = record.fields.ambito;
                var data_inizio = record.fields.data_inizio;
                var data_fine = record.fields.data_fine;
                if (ambito == null) {
                    stampa_btn.innerHTML += "<li class='li'><nav class='data'>Da " + data_inizio + " al " + data_fine + "</nav>  " + " " + nome_scuola + " '" + livello + "' " + " , voto: " + voto + "</li>";
                } else {
                    stampa_btn.innerHTML += "<li class='li'><nav class='data'>Da " + data_inizio + " al " + data_fine + "</nav>  " + " " + nome_scuola + " '" + livello + "' di " + ambito + " , voto: " + voto + "</li>";
                }
                area_info.appendChild(stampa_btn);
            });
            stampa_btn.innerHTML += "</ul>";
            area_info.appendChild(stampa_btn);
            return fetch(airtableUrlEsperienze);
        })
        .then(response2 => {
            // Gestisci la risposta della seconda richiesta
            return response2.json(); // Restituisce una Promise che rappresenta il corpo della risposta come JSON
        })
        .then(data2 => {
            var records2 = data2.records;
            stampa_btn.innerHTML += "<h1 class='lavoro'>Esperienze lavorative</h1><ul>";
            area_info.appendChild(stampa_btn);
            records2.forEach(function (record) {
                var nome_azienda = record.fields.posto_lavoro;
                var ruolo = record.fields.posizione_ricoperta;
                var descrizione_lavoro = record.fields.descrizione_lavoro;
                var data_inizio = record.fields.data_inizio;
                var data_fine = record.fields.data_fine;
                stampa_btn.innerHTML += "<li class='li'><nav class='data'>Da " + data_inizio + " al " + data_fine + "</nav>  " + " " + ruolo + " presso " + nome_azienda + "<img src='../images_cv_reg/info_chiara.png' class='img_info' id='img_info' onclick='showPopupList(event)'><div id='popup' class='popup'><div class='popup-content' id='popup-content'><span class='close' onclick='closePopupList(event)'>&times;</span><h1 class='pop-up-titolo'>Descrizione</h1><p class='pop-up-descrizione'>" + descrizione_lavoro + "</p></div></div></li>";
                area_info.appendChild(stampa_btn);
            }
            );
            stampa_btn.innerHTML += "</ul>";
            area_info.appendChild(stampa_btn);
        })
        .catch(error => {
            // Gestisci eventuali errori
            console.error(error);
        });
})
