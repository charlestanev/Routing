import authService from "../services/authService.js"
import { navTemplate } from "./navTemplate.js"


function getView(context, next){
    console.log(context);
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        currentPage: context.pathname
    }
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}