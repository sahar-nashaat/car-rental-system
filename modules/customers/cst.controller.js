import { ObjectId } from 'mongodb';
import { db } from '../../databases/dbConnection.js';


const addCst =async (req,res) => {
let user =await  db.collection('customers').insertOne(req.body)
res.json({message:'customer added successfully',user})
}
const getOne =async (req,res) => {
    let user =await db.collection('customers').findOne({_id:new ObjectId(req.params.id)})
    res.json({user})
}
const getAll =async (req,res) => {
    let users =await db.collection('customers').find().toArray()
    res.json({users})
}
const updateUser =async (req,res) => {
    let user =await db.collection('customers').updateOne({_id:new ObjectId(req.params.id)},{$set:req.body})
    res.json({message:"Updated sucessfully",user})
}
const deleteUser =async (req,res) => {
await db.collection('customers').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:"Deleted sucessfully"})
}


export {
    addCst,
    getOne,
    getAll,
    updateUser,
    deleteUser
}