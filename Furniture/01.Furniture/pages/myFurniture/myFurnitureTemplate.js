import { furnitureTemplate } from '../shared/templates.js';
import { html } from './../../node_modules/lit-html/lit-html.js';


export let myFurnitureTemplate = (allFurniture) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${allFurniture.map(f => furnitureTemplate(f))}
    </div>`;