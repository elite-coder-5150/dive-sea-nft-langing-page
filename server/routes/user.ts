const express = require('express');
const router = express.Router();

import UserController from '../controllers/user.controller';
let uc = new UserController();
router.get('/users', uc.getAll);
router.get('/users/:id', uc.getById);
router.post('/users', uc.create);
router.put('/users', uc.update);
router.delete('/users/:id', uc.delete);

export default router;
