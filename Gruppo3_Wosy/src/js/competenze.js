var mutex = 1;

btn_competenze.addEventListener("click", function () {
    fetch(airtableUrlLingue)
        .then(response => {
            // Gestisci la risposta della prima richiesta
            return response.json(); // Restituisce una Promise che rappresenta il corpo della risposta come JSON
        })
        .then(data => {
            btn_info.style.backgroundColor = 'white';
            btn_info.style.color = 'rgba(105,105,105,1)';
            btn_pro.style.backgroundColor = 'white';
            btn_pro.style.color = 'rgba(105,105,105,1)';
            btn_comp.style.backgroundColor = 'rgba(105,105,105,1)';
            btn_comp.style.color = 'white';
            var records = data.records;
            stampa_btn.innerHTML = "<h1 class='competenze_ling'>Competenze linguistiche</h1><ul>";
            area_info.replaceChildren(stampa_btn);
            records.forEach(function (record) {
                var lingua = record.fields.Lingua;
                var orale = record.fields.orale;
                var scritto = record.fields.scritto;
                stampa_btn.innerHTML += "<li class='li'><nav class='data'>" + lingua + "</nav> orale:  " + orale + " - scritto: " + scritto + "</li>";
                area_info.appendChild(stampa_btn);
            });
            stampa_btn.innerHTML += "</ul>";
            area_info.appendChild(stampa_btn);
            return fetch(airtableUrlCompetenze);
        })
        .then(response2 => {
            // Gestisci la risposta della prima richiesta
            return response2.json(); // Restituisce una Promise che rappresenta il corpo della risposta come JSON
        })
        .then(data2 => {
            var records = data2.records;
                stampa_btn.innerHTML += "<h1 class='competenze'>Competenze specifiche</h1><ul>";
                area_info.appendChild(stampa_btn);
                records.forEach(function (record) {
                    var skill = record.fields.genere_skill;
                    stampa_btn.innerHTML += "<div class='skill'>" + skill + "<label class='toggle-button'><input type='checkbox'><span class='slider'></span></label></div>";
                    area_info.appendChild(stampa_btn);
                });
                stampa_btn.innerHTML += "</ul>";
                area_info.appendChild(stampa_btn);
        })
        .catch(error => {
            // Gestisci eventuali errori
            console.error(error);
        });
})