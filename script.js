function toggleNav() {
    const fab = document.querySelector('.fab');
    const navBar = document.querySelector('.nav-bar');
    
    fab.classList.toggle('open');
    navBar.classList.toggle('open');
    
    const fabIcon = document.querySelector('.fab-icon');
    if (fab.classList.contains('open')) {
        fabIcon.textContent = '-';
    } else {
        fabIcon.textContent = '+';
    }
}


document.addEventListener('mousemove', (e) => {
    const glowElement = document.querySelector('.glow-circle');
    
    if (glowElement) {
        const circleSize = 50; // Size of the glow circle
        const offsetX = circleSize / 2;
        const offsetY = circleSize / 2;
        
        glowElement.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
    }
});

window.onload = function() {
    if (window.location.hash) {
        var element = document.getElementById(window.location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
