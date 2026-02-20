document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('a11y-toggle');
    const body = document.body;

    // 1. Beim Laden prüfen: War der Modus vorher schon an?
    if (localStorage.getItem('a11yMode') === 'active') {
        body.classList.add('accessible-mode');
        updateButton(true);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            body.classList.toggle('accessible-mode');
            
            // 2. Zustand speichern
            const isActive = body.classList.contains('accessible-mode');
            localStorage.setItem('a11yMode', isActive ? 'active' : 'inactive');
            
            updateButton(isActive);
        });
    }

    function updateButton(isActive) {
        if (!toggleBtn) return;
        if (isActive) {
            toggleBtn.style.backgroundColor = 'var(--neon)';
            toggleBtn.style.color = '#000';
            toggleBtn.innerHTML = '<i class="fa-solid fa-check"></i>'; // Häkchen wenn aktiv
        } else {
            toggleBtn.style.backgroundColor = 'transparent';
            toggleBtn.style.color = 'var(--neon)';
            toggleBtn.innerHTML = '<i class="fa-solid fa-universal-access"></i>';
        }
    }
});