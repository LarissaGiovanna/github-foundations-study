//abrir menu (mobile)
function openMenu(){
    const menuNav = document.getElementById('menu-nav');
    if (menuNav.style.display === 'block') {
        menuNav.style.display = 'none';
    } else {
        menuNav.style.display = 'block';
    }
}