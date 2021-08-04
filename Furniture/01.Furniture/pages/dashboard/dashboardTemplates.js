import { furnitureTemplate } from '../shared/templates.js';
import { html } from './../../node_modules/lit-html/lit-html.js';



export let dashboardTemplate = (allFurniture) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${allFurniture.map(f => furnitureTemplate(f))}
</div>`;