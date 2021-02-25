import { Router } from "express";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UsersController";

/*
    GET => Busca
    POST => Salvar
    PUT => Alterar
    DELETE => Deletar
    PATCH => Alteração específica

    http://localhost:3333/
    
    1° param => Rota(Recurso API)
    2° param => request, response
*/

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

router.post("/users", userController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/sendMail", sendMailController.execute);

export { router };
