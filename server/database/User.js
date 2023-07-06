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
System.register("database", ["sequelize"], function (exports_1, context_1) {
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
System.register("User", ["sequelize", "database"], function (exports_2, context_2) {
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
                }
            }, {
                // @ts-ignore
                db: database_1.db,
                tableName: 'users' // name of your table in the database
            });
            exports_2("default", User);
        }
    };
});
