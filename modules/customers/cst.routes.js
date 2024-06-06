import { Router } from "express";
import { addCst, deleteUser, getAll, getOne, updateUser } from "./cst.controller.js";
import auth from "../../middlewares/auth.js";

const cstRouter = Router()

cstRouter.post('/',addCst)
cstRouter.post('/auth',auth)
cstRouter.get('/:id',getOne)
cstRouter.get('/',getAll)
cstRouter.put('/:id',updateUser)
cstRouter.delete('/:id',deleteUser)

export default cstRouter