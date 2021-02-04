$(document).on('ready', function() {
    $(".variable-screen").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      variableWidth: true,
      centerMode: true,
    });
});

// メニューモーダル・ボタン表示切り替え
var isOpen = false;
document.getElementById('humberger-icon').addEventListener('click', function() {
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