window.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('reg_b');
    var referrer = document.referrer;

    if (referrer.includes('index.html')) {
        link.href = 'index.html';
    } else {
        link.href = 'index2.html';
    }
});