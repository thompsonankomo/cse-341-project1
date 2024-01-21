const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/', usersControllers.getAll);
router.get('/:id',usersControllers.getSingle);

router.post('/',usersControllers.createUser);
router.delete('/:id',usersControllers.deleteUser);
router.put('/:id',usersControllers.updateUser);




module.exports= router;