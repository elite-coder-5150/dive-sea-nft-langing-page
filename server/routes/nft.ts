const express = require('express');
const router = express.Router();
// @ts-ignore
import {NTFController} from '../controllers/nft.controller';
let nc = new NTFController();
router.get('/', nc.getAll);
router.get('/', nc.getAllNFT)
router.get('/:id', nc.getById);
router.post('/', nc.createNft);
router.put('/:id', nc.updateNft);
router.delete('/:id', nc.deleteNtf);
module.exports = router;



