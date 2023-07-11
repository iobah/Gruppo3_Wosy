
function cambia_cuore() {
    var cuore = document.getElementById("cuore");
    if (cuore.src.match("../images_cv_reg/cuore-vuoto.png")) {
        cuore.src = "../images_cv_reg/cuore-pieno.png";
        cuore.Class="cuore_pieno";
    }
    else {
        cuore.src = "../images_cv_reg/cuore-vuoto.png";
        cuore.Class="cuore_vuoto";
    }
}