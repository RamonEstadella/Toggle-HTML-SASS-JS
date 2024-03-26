let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.onclick = function() {
    // .toggle => Tiene dos modalidades: ON y OFF. Cuando se activa, cambian los estilos, y se apagan automaticamente cuando está desactivado, volviendo al origen 
    container.classList.toggle('active'); // Al hacer click se pone en marcha la clase 'active'
}