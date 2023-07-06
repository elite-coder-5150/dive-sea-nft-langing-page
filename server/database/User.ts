import {Model, DataTypes} from "sequelize";
// @ts-ignore
import {db} from "./database";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public created_at!: Date;
    public updated_at!: Date;
}

User.init(
        {
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
            // ... other fields
        },
        {

            // @ts-ignore
            db,
            tableName: 'users' // name of your table in the database
        }
);
export default User;
