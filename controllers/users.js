const mongodb = require('../data/database');
const objectId = require('mongodbb').objectId;

const getAll = async (res, req) =>{
     const result = await mongodb.getDatabase().db().collection('users').find();
     result.toArray().then((users)=>{
       res.setHeader('contentType','application/json');
       res.status('200').json(users);
     }) ; 

}

const getSingle = async (res, req)=>{

   const result = await mongodb.getDatabase().db().collection('users').find({id:userId});
   result.toArray().then((users)=>{
     res.setHeader('contentType','application/json');
     res.status('200').json(users[0]);
   }) ; 
};
module.exports ={
     getAll,
     getSingle,

};