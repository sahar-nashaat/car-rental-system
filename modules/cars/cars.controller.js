    import { ObjectId } from 'mongodb';
    import { db } from '../../databases/dbConnection.js';


    const addCar =async (req,res) => {
    let car =await  db.collection('cars').insertOne(req.body)
    res.json({message:'Car added successfully',car})
    }
    const getOne =async (req,res) => {
        let car =await db.collection('cars').findOne({_id:new ObjectId(req.params.id)})
        res.json({car})
    }
    const getAll =async (req,res) => {
        let cars =await db.collection('cars').find().toArray()
        res.json({cars})
    }
    const updateCar =async (req,res) => {
        let car =await db.collection('cars').updateOne({_id:new ObjectId(req.params.id)},{$set:req.body})
        res.json({message:"Updated sucessfully",car})
    }
    const deleteCar =async (req,res) => {
    await db.collection('cars').deleteOne({_id:new ObjectId(req.params.id)})
        res.json({message:"Deleted sucessfully"})
    }
    const getModel =async (req,res) => {
        let cars =await db.collection('cars').find({model:req.params.model}).toArray()
        res.json({cars})
    }
    const getRentedModel =async (req,res) => {
        let cars =await db.collection('cars').find({model:req.params.model,status:"rented"}).toArray()
        res.json({cars})
    }
    const getAvailModel =async (req,res) => {
        let cars =await db.collection('cars').find({model:req.params.model,status:"avail"}).toArray()
        res.json({cars})
    }
    const getAllRented =async (req,res) => {
        let cars =await db.collection('cars').find({status:"rented"}).toArray()
        res.json({cars})
    }
    const getAllAvail =async (req,res) => {
        let cars =await db.collection('cars').find({status:"avail"}).toArray()
        res.json({cars})
    }


    export {
        addCar,
        getOne,
        getAll,
        updateCar,
        deleteCar,
        getModel,
        getRentedModel,
        getAvailModel,
        getAllRented,
        getAllAvail
    }