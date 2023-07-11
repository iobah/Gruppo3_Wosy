btn_pro.addEventListener("click", function () {
    fetch(airtableUrlProgetti)
        .then(response => {
            // Gestisci la risposta della prima richiesta
            return response.json(); // Restituisce una Promise che rappresenta il corpo della risposta come JSON
        }
        )
        .then(data => {
            btn_info.style.backgroundColor = 'white';
            btn_info.style.color = 'rgba(105,105,105,1)';
            btn_pro.style.backgroundColor = 'rgba(105,105,105,1)';
            btn_pro.style.color = 'white';
            btn_comp.style.backgroundColor = 'white';
            btn_comp.style.color = 'rgba(105,105,105,1)';
            var records = data.records;
            stampa_btn.innerHTML = "<h1 class='progetti'>Progetti</h1>";
            area_info.replaceChildren(stampa_btn);
            var counter=0;
            records.forEach(function (record) {
                if(counter==3){ counter=0; }
                var nome = record.fields.nome_progetto;
                var foto = record.fields.foto_progetto[0].url;
                var link = record.fields.link_progetto;
                if(counter==0){
                stampa_btn.innerHTML += "<div class='primo_link'><a href='"+ link +"'><img src='"+ foto +"' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>"+ nome + "</h3></div></a></div>";
                }else{
                    stampa_btn.innerHTML += "<div class='altri_link'><a href='"+ link +"'><img src='"+ foto +"' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>"+ nome + "</h3></div></a></div>";
                }
                counter++;
                area_info.appendChild(stampa_btn);
            });
        })
        .catch(error => {
            // Gestisci eventuali errori
            console.error(error);
        });
});