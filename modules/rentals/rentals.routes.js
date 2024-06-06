import { Router } from "express";
import { addRental, deleteRental, getAll, getOne, updateRental } from "./rentals.controller.js";

const rentalsRouter = Router();


rentalsRouter.post('/',addRental)
rentalsRouter.get('/:id',getOne)
rentalsRouter.get('/',getAll)
rentalsRouter.put('/:id',updateRental)
rentalsRouter.delete('/:id',deleteRental)

export default rentalsRouter