import { Router } from "express";
import { UserController } from "./controllers/userController";

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

router.post("/users", userController.create);

export { router };