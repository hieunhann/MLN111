document.addEventListener('DOMContentLoaded', () => {
    console.log('Technology Presentation Loaded');
    
    // Logic for keyboard navigation (for future slides)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            // Next slide logic
        }
        if (e.key === 'ArrowLeft') {
            // Previous slide logic
        }
    });

    // Simple entry animation
    const titleGroup = document.querySelector('.title-group');
    if (titleGroup) {
        titleGroup.style.opacity = '0';
        titleGroup.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            titleGroup.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
            titleGroup.style.opacity = '1';
            titleGroup.style.transform = 'translateY(0)';
        }, 300);
    }
});
