import { render } from './../node_modules/lit-html/lit-html.js';

let viewContainer = undefined;
let navContainer = undefined;

function initialze(viewContainerDomElement, navDomElement) {
    viewContainer = viewContainerDomElement;
    navContainer = navDomElement;
}

async function renderView(templateResult){
    render(templateResult, viewContainer);
}

async function renderNav(templateResult){
    render(templateResult, navContainer);
}

function decorateContext(context, next) {
    context.renderView = renderView;
    context.renderNav = renderNav;
    next();
}

export default {
    initialze,
    decorateContext,
    renderNav,
    renderView
}