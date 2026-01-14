//abrir menu (mobile)
function openMenu(){
    const menuNav = document.getElementById('menu-nav');
    if (menuNav.style.display === 'block') {
        menuNav.style.display = 'none';
    } else {
        menuNav.style.display = 'block';
    }
}

//navegação entre seções
function back(current, previous){
    if (current && previous) {
        let currentSection = document.getElementById(current);
        currentSection.style.display = 'none';

        let previousSection = document.getElementById(previous);
        previousSection.style.display = 'block';
        previousSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function next(current, next){
    if (current && next) {
        let currentSection = document.getElementById(current);
        currentSection.style.display = 'none';

        let nextSection = document.getElementById(next);
        nextSection.style.display = 'block';
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}