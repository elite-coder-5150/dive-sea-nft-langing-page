/**
 * @deprecated This file is not used anymore
 * @see server/models/UserModel.ts
 */
import {Model, DataTypes}  from "sequelize";
// @ts-ignore
import db from "../database/database";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public created_at!: Date;
    public updated_at!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    }
    // @ts-ignore
}, { db, tableName: 'users'})

export default User;
