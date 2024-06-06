import express from 'express';
import cstRouter from './modules/customers/cst.routes.js';
import carsRouter from './modules/cars/cars.routes.js';
import rentalsRouter from './modules/rentals/rentals.routes.js';
const app = express()
const port = 3000

app.use(express.json())
app.use("/customers", cstRouter)
app.use("/cars", carsRouter)
app.use("/rentals", rentalsRouter)










app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))