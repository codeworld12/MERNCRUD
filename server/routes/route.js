// import express from "express";

// import { addUser, getUsers } from '../Controller/user-controller.js';

// const router = express.Router();

// router.post('/add', addUser);
// router.get('/all', getUsers);

// export default router;


import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../Controller/user-controller.js';

const router = express.Router();

router.get('/all', getUsers);
router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;