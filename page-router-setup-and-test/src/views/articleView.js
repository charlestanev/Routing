import articlesData from "../articlesData.js";
import { titleFormatter } from "../utils.js";

const articleTemplate = (data) => /*javascript*/ `
    <article>
        <header>
            <h1>${data.title}</h1>
        </header>

        <main>
            <p>${data.content}</p>
        </main>

        <footer>
            <p>created by: ${data.author || 'John Doe'}</p>
        </footer>
    </article>
`;

export default function(context) {
    let rootElement = document.querySelector('.root');

    let currentArticle = articlesData.find(x => titleFormatter(x.title) == context.params.id);

    rootElement.innerHTML = articleTemplate(currentArticle);

}