var isOpen = false;
document.getElementById('humberger-icon').addEventListener('click', function() {
    console.log('1234567890');
    var menu = document.getElementById('header-mordal');

    if (isOpen) {
        isOpen = false;
        menu.style.top = "-100%";
    } else {
        isOpen = true;
        menu.style.top = "0";
    }
    
    this.classList.toggle('close-menu');
}, false);