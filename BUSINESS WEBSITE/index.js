function downloadCardImage(btn) {
    const card = btn.closest('.card-container');
    const img = card.querySelector('img.product-photo');
    if (img && img.src) {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'sticker-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('No image found to download.');
    }
}

// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebarNav');
    const sidebarBtn = document.querySelector('.side-bar');
    sidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    // Optional: Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !sidebarBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
});