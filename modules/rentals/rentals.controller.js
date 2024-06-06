import { ObjectId } from 'mongodb';
import { db } from '../../databases/dbConnection.js';


const addRental =async (req,res) => {
let rental =await  db.collection('rentals').insertOne(req.body)
res.json({message:'Rental added successfully',rental})
}
const getOne =async (req,res) => {
    let rental =await db.collection('rentals').findOne({_id:new ObjectId(req.params.id)})
    res.json({rental})
}
const getAll =async (req,res) => {
    let rentals =await db.collection('rentals').find().toArray()
    res.json({rentals})
}
const updateRental =async (req,res) => {
    let rental =await db.collection('rentals').updateOne({_id:new ObjectId(req.params.id)},{$set:req.body})
    res.json({message:"Updated sucessfully",rental})
}
const deleteRental =async (req,res) => {
await db.collection('rentals').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:"Deleted sucessfully"})
}


export {
    addRental,
    getOne,
    getAll,
    updateRental,
    deleteRental
}