var area_info_fake = document.getElementById("stampa_info_fake");
var stampa_btn_fake = document.createElement("div");

var btn_info_fake = document.getElementById("btn_info_fake");
var btn_pro_fake = document.getElementById("btn_progetti_fake");
var btn_comp_fake = document.getElementById("btn_competenze_fake");


btn_info_fake.style.backgroundColor = 'white';
btn_info_fake.style.color = 'rgba(105,105,105,1)';
btn_pro_fake.style.backgroundColor = 'rgba(105,105,105,1)';
btn_pro_fake.style.color = 'white';
btn_comp_fake.style.backgroundColor = 'white';
btn_comp_fake.style.color = 'rgba(105,105,105,1)';
stampa_btn_fake.innerHTML = "<h1 class='progetti'>Progetti</h1><div class='primo_link'><a href=''><img src='../images_cv_reg/pizza_menu.jpg' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>SmartMenu</h3></div></a></div><div class='altri_link'><a href=''><img src='../images_cv_reg/palestra.jpg' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>Fisichiamoci</h3></div></a></div>";
area_info_fake.replaceChildren(stampa_btn_fake);


btn_info_fake.addEventListener("click", function () {
    btn_info_fake.style.backgroundColor = 'rgba(105,105,105,1)';
    btn_info_fake.style.color = 'white';
    btn_pro_fake.style.backgroundColor = 'white';
    btn_pro_fake.style.color = 'rgba(105,105,105,1)';
    btn_comp_fake.style.backgroundColor = 'white';
    btn_comp_fake.style.color = 'rgba(105,105,105,1)';
    stampa_btn_fake.innerHTML = "<h1 class='biografia'>Biografia</h1><p class='stampa_info'>Sono un programmatore informatico residente a Genova con una passione per la creazione di soluzioni software innovative. Con una solida formazione in informatica e un'esperienza pluriennale nello sviluppo di applicazioni web e software, sono specializzato nella programmazione front-end e back-end.</p>";
    stampa_btn_fake.innerHTML += "<h1 class='istruzione'>Istruzione</h1><ul><li class='li'><nav class='data'>Da 2018-09-14 al 2021-09-22 </nav> Laurea Triennale di Informatica presso Università degli studi di Genova , voto: 90/100</li></ul>";
    stampa_btn_fake.innerHTML += "<h1 class='lavoro'>Esperienze lavorative</h1><ul><li class='li'><nav class='data'>Da 2022-09-12 al 2022-12-18</nav>  programmatore front end  presso Microsoft <img src='../images_cv_reg/info_chiara.png' class='img_info' id='img_info' onclick='showPopup()'><div id='popup' class='popup'><div class='popup-content' id='popup-content'><span class='close' onclick='closePopup()'>&times;</span><h1 class='pop-up-titolo'>Descrizione</h1><p class='pop-up-descrizione'>Creazione e manutenzione sito web</p></div></div></li>";
    area_info_fake.replaceChildren(stampa_btn_fake);
});

btn_pro_fake.addEventListener("click", function () {
    btn_info_fake.style.backgroundColor = 'white';
    btn_info_fake.style.color = 'rgba(105,105,105,1)';
    btn_pro_fake.style.backgroundColor = 'rgba(105,105,105,1)';
    btn_pro_fake.style.color = 'white';
    btn_comp_fake.style.backgroundColor = 'white';
    btn_comp_fake.style.color = 'rgba(105,105,105,1)';
    stampa_btn_fake.innerHTML = "<h1 class='progetti'>Progetti</h1><div class='primo_link'><a href=''><img src='../images_cv_reg/pizza_menu.jpg' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>SmartMenu</h3></div></a></div><div class='altri_link'><a href=''><img src='../images_cv_reg/palestra.jpg' alt='Immagine' class='card-image'><div class='card-content'><h3 class='card-title'>Fisichiamoci</h3></div></a></div>";
    area_info_fake.replaceChildren(stampa_btn_fake);
});

btn_comp_fake.addEventListener("click", function () {
    btn_info_fake.style.backgroundColor = 'white';
    btn_info_fake.style.color = 'rgba(105,105,105,1)';
    btn_pro_fake.style.backgroundColor = 'white';
    btn_pro_fake.style.color = 'rgba(105,105,105,1)';
    btn_comp_fake.style.backgroundColor = 'rgba(105,105,105,1)';
    btn_comp_fake.style.color = 'white';
    stampa_btn_fake.innerHTML = "<h1 class='competenze_ling'>Competenze linguistiche</h1><ul><li class='li'><nav class='data'> Italiano </nav> orale: madrelingua - scritto: madrelingua</li><li class='li'><nav class='data'> Inglese </nav> orale: B1 - scritto: B2</li></ul>";
    stampa_btn_fake.innerHTML += "<h1 class='competenze'>Competenze specifiche</h1><ul></ul><div class='skill'>Javascript<label class='toggle-button'><input type='checkbox'><span class='slider'></span></label></div><div class='skill'>HTML<label class='toggle-button'><input type='checkbox'><span class='slider'></span></label></div><div class='skill'>CSS<label class='toggle-button'><input type='checkbox'><span class='slider'></span></label></div>";
    area_info_fake.replaceChildren(stampa_btn_fake);
});