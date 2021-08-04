import articlesData from "../articlesData.js";
import { titleFormatter } from "../utils.js";

const articlesTemplate = (data) => /*javascript*/ `
    <article>
        <h3>${data.title}</h3>
        <a href="/articles/${titleFormatter(data.title)}">Read more ...</a>
        
    </article>
`;

export default function(context) {

    let rootElement = document.querySelector('.root');

    let articlesHtml = articlesData.map(x => articlesTemplate(x)).join('<hr>');

    rootElement.innerHTML = articlesHtml;
}