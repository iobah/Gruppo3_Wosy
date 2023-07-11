var airtableUrlUtenti = "https://api.airtable.com/v0/appPkKHEOVpwb6bCK/tbl3aRxIln9xS1CPI?api_key=" + apikey;
var airtableUrlEsperienze = "https://api.airtable.com/v0/appPkKHEOVpwb6bCK/tblaYSVlJFN2pkqmz?api_key=" + apikey;
var airtableUrlFormazione = "https://api.airtable.com/v0/appPkKHEOVpwb6bCK/tblDTpBBlT8WR2BxF?api_key=" + apikey;
var airtableUrlCompetenze = "https://api.airtable.com/v0/appPkKHEOVpwb6bCK/tblXdX9dIwjX9QcQM?api_key=" + apikey;
var airtableUrlLingue = "https://api.airtable.com/v0/appPkKHEOVpwb6bCK/tblN2BWZg4mWbRo9E?api_key=" + apikey;
var airtableUrlProgetti = "https://api.airtable.com/v0/appPkKHEOVpwb6bCK/tblhiHg0CAVApvnbm?api_key=" + apikey;

var area_info = document.getElementById("stampa_info");
var stampa_btn = document.createElement("div");

var btn_info = document.getElementById("btn_info");
var btn_pro = document.getElementById("btn_progetti");
var btn_comp = document.getElementById("btn_competenze");

fetch(airtableUrlUtenti)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var records = data.records;
        var record = records[0];
        var nome_cognome = document.getElementById("nom_cogn");
        var residenza = document.getElementById("residenza");
        var email_html = document.getElementById("email");
        var img = document.getElementById("img_prof");
        var prof = document.getElementById("professione");
        var tel = document.getElementById("telefono");
        var web = document.getElementById("sito");
        var nom_element = document.createElement("div");
        var res_element = document.createElement("div");
        var email_element = document.createElement("div");
        var img_element = document.createElement("div");
        var prof_element = document.createElement("div");
        var tel_element = document.createElement("div");
        var web_element = document.createElement("div");

        if (record != null) {
            var nome = record.fields.Nome;
            var cognome = record.fields.Cognome;
            var email = record.fields.Email;
            var img_profilo = record.fields.FotoProfilo[0].url;
            var nazione = record.fields.Nazione;
            var citta = record.fields.Citta;
            var professione = record.fields.Professione;
            var telefono = record.fields.Telefono;
            var sito = record.fields.sitoweb;
            var descrizione = record.fields.Descrizione;

            //nome e cognome
            nom_element.innerHTML = "<p class='nome'>" + nome + " " + cognome + "</p>";
            nome_cognome.replaceChildren(nom_element);

            //residenza
            res_element.innerHTML = citta + ", " + nazione;
            residenza.replaceChildren(res_element);

            //email
            email_element.innerHTML = email;
            email_html.replaceChildren(email_element);

            //immagine profilo
            img_element.innerHTML = "<img src='" + img_profilo + "' class='img_profilo'>";
            img.replaceChildren(img_element);

            //professione
            prof_element.innerHTML = professione;
            prof.replaceChildren(prof_element);

            //telefono
            tel_element.innerHTML = telefono;
            tel.replaceChildren(tel_element);

            if(sito != null){
                web_element.innerHTML = "<a href='" + sito + "' class='link'>" + sito + "</a>";
                web.replaceChildren(web_element);
            }

            return fetch(airtableUrlProgetti);
        }
    })
    .then(function (response1) {
        return response1.json();
    })
    .then(function (data1) {
        btn_info.style.backgroundColor = 'white';
        btn_info.style.color = 'rgba(105,105,105,1)';
        btn_pro.style.backgroundColor = 'rgba(105,105,105,1)';
        btn_pro.style.color = 'white';
        btn_comp.style.backgroundColor = 'white';
        btn_comp.style.color = 'rgba(105,105,105,1)';
        var records = data1.records;
        stampa_btn.innerHTML = "<h1 class='progetti'>Progetti</h1>";
        area_info.replaceChildren(stampa_btn);
        var counter = 0;
        records.forEach(function (record) {
            if (counter == 3) { counter = 0; }
            var nome = record.fields.nome_progetto;
            var foto = record.fields.foto_progetto[0].url;
            var link = record.fields.link_progetto;
            if (counter == 0) {
                stampa_btn.innerHTML += "<div class='primo_link'><a href='" + link + "'><img src='" + foto + "' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>" + nome + "</h3></div></a></div>";
            } else {
                stampa_btn.innerHTML += "<div class='altri_link'><a href='" + link + "'><img src='" + foto + "' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>" + nome + "</h3></div></a></div>";
            }
            counter++;
            area_info.appendChild(stampa_btn);
        });
    })
    .catch(function (error) {
        console.log(error);
    });