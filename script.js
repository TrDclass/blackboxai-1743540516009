// Form validation for upload page
document.getElementById('uploadForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const fileInput = document.getElementById('videoFile');
    
    if (!title || !fileInput.files.length) {
        alert('Please fill in all required fields');
        return;
    }
    
    // In a real app, you would upload the file here
    alert('Video uploaded successfully! (This is a demo)');
    this.reset();
});

// Search functionality
document.querySelector('header button')?.addEventListener('click', function() {
    const searchTerm = document.querySelector('header input').value;
    if (searchTerm.trim()) {
        // In a real app, you would redirect to search.html with query params
        window.location.href = 'search.html';
    }
});

// Toggle mobile menu (would need a menu button in mobile view)
document.querySelector('.fa-bars')?.addEventListener('click', function() {
    alert('Mobile menu would open here');
});