import authService from "../../services/authService.js";
import { loginTemplate } from "./loginTemplate.js";

async function submitHandler(context, e){
    e.preventDefault();
    let formData = new FormData(e.target);

    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    let loginResult = await authService.login(user);
    context.page.redirect('/dashboard');
}

async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context);
    let form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = loginTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}