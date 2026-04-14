document.addEventListener('DOMContentLoaded', () => {
    // Basic Fade-in effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-out';
        document.body.style.opacity = '1';
    }, 50);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        const currentFile = window.location.pathname.split('/').pop() || '1.html';
        
        const sequence = ['1.html', '2.html', '3.html', '4.html', 'Thao.html'];
        const currentIndex = sequence.indexOf(currentFile);

        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentIndex < sequence.length - 1) {
                navigateTo(sequence[currentIndex + 1]);
            }
        }
        if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                navigateTo(sequence[currentIndex - 1]);
            }
        }
    });
});

function navigateTo(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}
