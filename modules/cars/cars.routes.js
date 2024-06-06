import { Router } from "express";
import { addCar, deleteCar, getAll, getAllAvail, getAllRented, getAvailModel, getModel, getOne, getRentedModel, updateCar } from "./cars.controller.js";

const carsRouter = Router()

carsRouter.post('/',addCar)
carsRouter.get('/rented',getAllRented)
carsRouter.get('/avail',getAllAvail)
carsRouter.get('/:id',getOne)
carsRouter.get('/',getAll)
carsRouter.put('/:id',updateCar)
carsRouter.delete('/:id',deleteCar)
carsRouter.get('/model/:model',getModel)
carsRouter.get('/rented/:model',getRentedModel)
carsRouter.get('/avail/:model',getAvailModel)


export default carsRouter