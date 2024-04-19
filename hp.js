document.querySelector('.navbar a[href="#container"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#container').scrollIntoView({
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.getElementById('resume-link');
    resumeLink.addEventListener('click', function(e) {
        e.preventDefault();
        openResume();
    });

    function openResume() {
        const resumeUrl = 'Resume.pdf';
        window.open(resumeUrl, '_blank');
    }
});
