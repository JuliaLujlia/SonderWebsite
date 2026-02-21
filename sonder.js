document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('a11y-toggle');
    
    // 1. Prüfen, ob der Modus schon aktiv war
    if (localStorage.getItem('a11yMode') === 'active') {
        document.body.classList.add('accessible-mode');
    }

    // 2. Button-Logik
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('accessible-mode');
            
            // Speicher den Zustand
            const isActive = document.body.classList.contains('accessible-mode');
            localStorage.setItem('a11yMode', isActive ? 'active' : 'inactive');
        });
    }
});