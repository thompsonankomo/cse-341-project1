const mongodb = require('../data/database');
const objectId = require('mongodbb').objectId;

const getAll = async (res, req) => {
  const userId = new objectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('users').find();
  result.toArray().then((users) => {
    res.setHeader('contentType', 'application/json');
    res.status('200').json(users);
  });

}

const getSingle = async (res, req) => {
  const userId = new objectId(req.params.id);

  const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader('contentType', 'application/json');
    res.status('200').json(users[0]);
  });
};

const createUser = async (req, res) => {
  const userId = new objectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
    LastName: req.body.LastName,
    email: req.body.email,
    favoritecolor: req.body.favoritecolor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
  if (response.acknowledged > 0) {
    res.status(204).send(500)
  } else
    res.status(500).json(response.error || 'Some error occured while updating');


};
const updateUser = async (req, res) => {
  const userId = new objectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
    LastName: req.body.LastName,
    email: req.body.email,
    favoritecolor: req.body.favoritecolor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection('users').replaceOne(user);
  if (response.modifiedCount > 0) {
    res.status(204).send(500)
  } else
    res.status(500).json(response.error || 'Some error occured while updating');


};
const deleteUser = async (req, res) => {
  const userId = new objectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
    LastName: req.body.LastName,
    email: req.body.email,
    favoritecolor: req.body.favoritecolor,
    birthday: req.body.birthday
  };
  const response  =await mongodb.getDatabase().db().collection('users').deleteOne({_id:userId},true);
  if(response.deleteCount > 0){
res.status(204).send(500)
  }else
  res.status(500).json(response.error||'Some error occured while updating');

};

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser,

};