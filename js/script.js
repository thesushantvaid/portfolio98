
document.addEventListener('DOMContentLoaded', function () {
    const resumeButton = document.getElementById('resumeBtn');

    resumeButton.addEventListener('click', () => {
        const resumeLink = 'https://docs.google.com/document/d/1JhkDVeU-lDl4O3UIzLFVH1ahsUGcSD0ljd33Rp9h6EY/edit?usp=sharing'; // Replace with your actual resume link
        window.open(resumeLink, '_blank');
    });
});