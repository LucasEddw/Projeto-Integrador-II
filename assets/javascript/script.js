console.clear;

function adicionarLinks() {
    let head = document.querySelector('head.adicionar-css');
    let link_cdnjs = document.createElement('link');
    link_cdnjs.rel = 'stylesheet';
    link_cdnjs.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    head.appendChild(link_cdnjs);
    let link_style = document.createElement('link');
    link_style.rel = 'stylesheet'
    link_style.href = 'assets/styles/style.css';
    head.appendChild(link_style);
    let link_props = document.createElement('link');
    link_props.rel = 'stylesheet'
    link_props.href = 'assets/styles/props.css';
    head.appendChild(link_props);
}

adicionarLinks();

fetch('nav-bar.html')
    .then(response => response.text())
    .then(data => {
        const repositorio = document.querySelector('div.repositorio').innerHTML = data;
        const nav_bar = document.querySelector('nav.nav-bar');
        const body = document.querySelector('body.adicionar-nav-bar');
        const nav_bar_first = body.firstChild;
        body.insertBefore(nav_bar, nav_bar_first);
    })

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const repositorio = document.querySelector('div.repositorio').innerHTML = data;
        const footer = document.querySelector('footer.footer');
        const footer_father = document.querySelector('footer#footer');
        footer_father.append(footer);
    })

window.addEventListener('scroll', () => {
    let nav_bar = document.querySelector('nav.nav-bar');
    if (window.scrollY > 500) {
        nav_bar.classList.add('nav-bar-animation');
    }
    if (window.scrollY == 0 && nav_bar.classList.contains('nav-bar-animation')) {
        nav_bar.classList.add('nav-bar-animation2');
    } if (window.scrollY > 0 && window.scrollY < 300 && nav_bar.classList.contains('nav-bar-animation2')) {
        nav_bar.classList.remove('nav-bar-animation');
        setTimeout(() => {
            nav_bar.classList.remove('nav-bar-animation2');
        }, 200);
    }
});

const banner_btn = document.querySelector('#banner-button');

banner_btn.addEventListener('click',()=>{
    let html = document.querySelector('html');
    window.scrollTo({
        top: window.innerHeight - 116
    });
})
