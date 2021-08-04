import authService from "../../services/authService.js";
import furnitureService from "../../services/furnitureService.js";
import { myFurnitureTemplate } from "./myFurnitureTemplate.js";


async function getView(context) {
    let userId = authService.getUserId();
    let myFurniture = await furnitureService.getMyFurniture(userId);
    let templateResult = myFurnitureTemplate(myFurniture);
    context.renderView(templateResult);
}

export default {
    getView
}