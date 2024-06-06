import { db } from "../databases/dbConnection.js"

const auth =async (req,res) => {
    let user = await db.collection('customers').findOne({email:req.body.email})
    if (user) {
        if (user.password == req.body.password) {
            res.json({message:'Logged in successfully'})
        }else{
            res.json({message:'Invalid email or password'})
        
        }
    }else{
        res.json({message:'Invalid email or password'})
    
    }
    }

export default auth