console.clear;

function adicionarLinks() {
    let html = document.querySelector('head.adicionar-favicon-cdnjs');
    let link_cdnjs = document.createElement('link');
    link_cdnjs.rel = 'stylesheet';
    link_cdnjs.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    html.append(link_cdnjs);
    let link_style = document.createElement('link');
    link_style.rel = 'stylesheet'
    link_style.href = 'assets/styles/style.css';
    html.append(link_style);
    let link_props = document.createElement('link');
    link_props.rel = 'stylesheet'
    link_props.href = 'assets/styles/props.css';
    html.append(link_props);
}

adicionarLinks();