import page from './node_modules/page/page.mjs';

import homeView from './src/views/homeView.js';
import pricingView from './src/views/pricingView.js';
import articleView from './src/views/articleView.js';
import articlesView from './src/views/articlesView.js';


page('/home', homeView);
page('/pricing', pricingView);
page('/articles', articlesView);
page('/articles/:id', articleView);

page('/', '/home');

page.start();