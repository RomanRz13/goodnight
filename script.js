document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    var title = document.querySelector('.z_title');

    button.addEventListener('click', function() {
        document.body.classList.toggle('day');
        if (title.textContent === "Доброй ночи🌙!!!") {
            title.textContent = "Доброе утро☀️!!!";
        } else {
            title.textContent = "Доброй ночи🌙!!!";
        }
    });
});