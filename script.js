window.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00ff41,
        backgroundColor: 0x0,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 16.00
    })
});

function showLightbox(src) {
    document.getElementById('lb-img').src = src;
    document.getElementById('lightbox').classList.remove('hidden');
}