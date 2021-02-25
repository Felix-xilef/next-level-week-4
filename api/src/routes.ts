import { Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

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

router.post("/users", userController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

export { router };
