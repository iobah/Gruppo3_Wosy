function showPopupList(event) {
    var popup = event.target.parentNode.querySelector('.popup');
    popup.style.display = 'block';
}

function closePopupList(event) {
    var popup = event.target.closest('.popup');
    popup.style.display = 'none';
}


function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showContatta() {
    document.getElementById("popup-contatta").style.display = "block";
}

function closeContatta() {
    document.getElementById("popup-contatta").style.display = "none";
}

