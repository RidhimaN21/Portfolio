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

document.addEventListener('DOMContentLoaded', function() {

    const readMoreButtons = document.querySelectorAll('.read-more-btn1');


    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'yogasana-details.html';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const readMoreButtons = document.querySelectorAll('.read-more-btn2');


    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'portfolio-details.html';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const readMoreButtons = document.querySelectorAll('.read-more-btn3');


    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'p3-details.html';
        });
    });
});