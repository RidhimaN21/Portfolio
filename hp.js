document.querySelector('.navbar a[href="#container"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#container').scrollIntoView({
        behavior: 'smooth'
    });
});