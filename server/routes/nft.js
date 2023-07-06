System.register("nft", ["../controllers/nft.controller"], function (exports_1, context_1) {
    "use strict";
    var express, router, nft_controller_1, nc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (nft_controller_1_1) {
                nft_controller_1 = nft_controller_1_1;
            }
        ],
        execute: function () {
            express = require('express');
            router = express.Router();
            nc = new nft_controller_1.NTFController();
            router.get('/', nc.getAll);
            router.get('/', nc.getAllNFT);
            router.get('/:id', nc.getById);
            router.post('/', nc.createNft);
            router.put('/:id', nc.updateNft);
            router["delete"]('/:id', nc.deleteNtf);
            module.exports = router;
        }
    };
});
