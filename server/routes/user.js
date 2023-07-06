var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
System.register("models/User", ["sequelize", "database/database"], function (exports_2, context_2) {
    "use strict";
    var sequelize_2, database_1, User;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (sequelize_2_1) {
                sequelize_2 = sequelize_2_1;
            },
            function (database_1_1) {
                database_1 = database_1_1;
            }
        ],
        execute: function () {
            User = /** @class */ (function (_super) {
                __extends(User, _super);
                function User() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return User;
            }(sequelize_2.Model));
            User.init({
                id: {
                    type: sequelize_2.DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: {
                    type: sequelize_2.DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: sequelize_2.DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                password: {
                    type: sequelize_2.DataTypes.STRING,
                    allowNull: false
                },
                created_at: {
                    type: sequelize_2.DataTypes.DATE,
                    allowNull: false
                },
                updated_at: {
                    type: sequelize_2.DataTypes.DATE,
                    allowNull: false
                }
                // @ts-ignore
            }, { db: database_1["default"], tableName: 'users' });
            exports_2("default", User);
        }
    };
});
System.register("controllers/user.controller", ["database/database"], function (exports_3, context_3) {
    "use strict";
    var database_2, UserController;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (database_2_1) {
                database_2 = database_2_1;
            }
        ],
        execute: function () {
            UserController = /** @class */ (function () {
                function UserController() {
                }
                UserController.prototype.getAll = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var sql;
                        return __generator(this, function (_a) {
                            sql = "\n                select * from users\n           ";
                            database_2["default"].query(sql, function (err, results) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    resolve(results);
                                }
                            });
                            return [2 /*return*/];
                        });
                    }); });
                };
                UserController.prototype.getById = function (id) {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                select * from users where user_id = ?\n            ";
                        database_2["default"].query(sql, [id], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                resolve(results[0]);
                            }
                        });
                    });
                };
                UserController.prototype.create = function (user) {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                 insert into users (name, password, email) values (?, ?, ?)\n              ";
                        database_2["default"].query(sql, [user.name, user.password, user.email], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                resolve(results[0]);
                            }
                        });
                    });
                };
                UserController.prototype.update = function (user) {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                 update users set name = ?, password = ?, email = ? where user_id = ?\n            ";
                        database_2["default"].query(sql, [user.name, user.password, user.email, user.id], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                resolve(results[0]);
                            }
                        });
                    });
                };
                UserController.prototype["delete"] = function (id) {
                    return new Promise(function (resolve, reject) {
                        var sql = "\n                delete from users where user_id = ?\n           ";
                        database_2["default"].query(sql, [id], function (err, results) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                resolve(results[0]);
                            }
                        });
                    });
                };
                return UserController;
            }());
            exports_3("default", UserController);
        }
    };
});
System.register("routes/user", ["controllers/user.controller"], function (exports_4, context_4) {
    "use strict";
    var express, router, user_controller_1, uc;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (user_controller_1_1) {
                user_controller_1 = user_controller_1_1;
            }
        ],
        execute: function () {
            express = require('express');
            router = express.Router();
            uc = new user_controller_1["default"]();
            router.get('/users', uc.getAll);
            router.get('/users/:id', uc.getById);
            router.post('/users', uc.create);
            router.put('/users', uc.update);
            router["delete"]('/users/:id', uc["delete"]);
            exports_4("default", router);
        }
    };
});
