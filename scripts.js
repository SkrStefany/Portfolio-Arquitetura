let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 9000); // Muda de imagem a cada 9 segundos
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var celular = document.getElementById('celular').value;
    var email = document.getElementById('email').value;
    var projeto = document.getElementById('projeto').value;

    // Montar a URL do WhatsApp
    var url = `https://wa.me/5517997125710?text=` +
              `Nome: ${encodeURIComponent(nome)}%0A` +
              `Celular: ${encodeURIComponent(celular)}%0A` +
              `E-mail: ${encodeURIComponent(email)}%0A` +
              `Projeto: ${encodeURIComponent(projeto)}`;

    // Redirecionar para o WhatsApp
    window.open(url, '_blank'); 
});
