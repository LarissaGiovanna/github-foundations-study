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

const ptBR = document.getElementById("PT-BR");
const enUS = document.getElementById("EN-US");
ptBR.addEventListener("click", () => setLanguage("PT-BR"));
enUS.addEventListener("click", () => setLanguage("EN-US"));

function setLanguage(language) {
    fetch('src/js/languages_home.json')
        .then(response => response.json())
        .then(data => {
            const texts = data[language];
            for (const key in texts) {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = texts[key];
                    console.log(texts[key]);
                }
            }
        });
}