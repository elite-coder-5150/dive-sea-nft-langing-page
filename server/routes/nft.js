System.register("database/database", ["sequelize"], function (exports_1, context_1) {
    "use strict";
    var sequelize_1, Database;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (sequelize_1_1) {
                sequelize_1 = sequelize_1_1;
            }
        ],
        execute: function () {
            Database = /** @class */ (function () {
                function Database() {
                }
                Database.prototype.connect = function () {
                    var db = new sequelize_1.Sequelize({
                        dialect: 'mysql',
                        host: 'localhost',
                        port: 8889,
                        database: 'dive_sea',
                        username: 'root'
                    });
                };
                Database.getInstance = function () {
                    if (!Database.instance) {
                        Database.instance = new Database();
                    }
                    return Database.instance;
                };
                Database.prototype.getConnection = function () {
                    return this.connection;
                };
                Database.prototype.query = function (sql, args) {
                    return;
                };
                return Database;
            }());
            exports_1("Database", Database);
        }
    };
});
System.register("models/ntf", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("controllers/nft.controller", ["database/database"], function (exports_3, context_3) {
    "use strict";
    var database_1, NFTController;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (database_1_1) {
                database_1 = database_1_1;
            }
        ],
        execute: function () {
            NFTController = /** @class */ (function () {
                function NFTController() {
                }
                NFTController.prototype.getAll = function () {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                select * from nft\n            ";
                        database_1.db.query(sql, function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                resolve(results);
                            }
                        });
                    });
                };
                NFTController.prototype.getById = function (id) {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                select * from nft where nft_id = ?\n            ";
                        database_1.db.query(sql, [id], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                resolve(results[0]);
                            }
                        });
                    });
                };
                NFTController.prototype.create = function (req, res) {
                    return new Promise(function (resolve, reject) {
                        var _a = req.body, name = _a.name, description = _a.description, image_url = _a.image_url, price = _a.price, owner = _a.owner;
                        var sql = "\n                INSERT INTO nft (nft_id,owner, name, description, image_url, price, created_at, updated_at)\n                VALUES (?, ?, ?, ?, ?, ?, ?, ?)\n            ";
                        database_1.db.query(sql, [null, owner, name, description, image_url, price, new Date(), new Date()], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                res.json(results);
                            }
                        });
                    });
                };
                NFTController.prototype.update = function (req, res) {
                    return new Promise(function (resolve, reject) {
                        var _a = req.body, name = _a.name, description = _a.description, image_url = _a.image_url, price = _a.price, owner = _a.owner;
                        var sql = "\n                UPDATE nft SET name = ?, description = ?, image_url = ?, price = ?, updated_at = ?\n                WHERE nft_id = ?\n            ";
                        database_1.db.query(sql, [name, description, image_url, price, owner, new Date(), req.params.id], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                res.json(results);
                            }
                        });
                    });
                };
                NFTController.prototype["delete"] = function (req, res) {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                DELETE FROM nft WHERE nft_id = ?\n            ";
                        database_1.db.query(sql, [req.params.id], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                res.json(results);
                            }
                        });
                    });
                };
                return NFTController;
            }());
            exports_3("default", NFTController);
        }
    };
});
System.register("routes/nft", ["controllers/nft.controller"], function (exports_4, context_4) {
    "use strict";
    var express, router, nft_controller_1, nc;
    var __moduleName = context_4 && context_4.id;
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
