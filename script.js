document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo: Cambiar el texto del slider cada 5 segundos
    const sliderText = document.querySelector('.slider-text');
    const texts = [
        'Accesorios que destacan tu estilo único',
        'Novedades y tendencias',
        'Estilo y elegancia en cada detalle'
    ];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % texts.length;
        sliderText.textContent = texts[index];
    }, 5000);
});
