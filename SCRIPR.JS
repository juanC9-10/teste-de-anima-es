window.addEventListener("scroll", function() {
    let box = document.getElementById("sticky-box");
    let container = document.querySelector(".container");
    let scrollPosition = window.scrollY;
    let containerTop = container.offsetTop;
    let containerHeight = container.offsetHeight;

    // Definir os limites do movimento da caixa
    let targetPosition = scrollPosition - containerTop;

    // Certificar que a caixa não saia do container
    if (targetPosition >= 0 && targetPosition <= (containerHeight - box.clientHeight)) {
        // Usar um efeito suave para movimentação
        box.style.transition = "top 0.3s ease-out"; 
        box.style.top = targetPosition + "px";
    }
});