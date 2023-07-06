// @ts-ignore
import mysql from 'mysql';
import {Sequelize} from 'sequelize';

export class Database {
    private static instance: Database;
    public connection: mysql.Connection;

    private connect() {
        const db = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 8889,
            database:'dive_sea',
            username: 'root'
        })
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public getConnection(): mysql.Connection {
        return this.connection;
    }

    public query (sql: string, args?: any) {
        return
    }


    // q: how can i use the function above?
    // public query (sql: string, args?: any): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.connection.query(sql, args, (err, rows) => {
    //             if (err) {
    //                 return reject(err);
    //             }
    //
    //             resolve(rows);
    //         });
    //     });
    // }
    // q: how can i call this function to query the database?
    // a: you can call this function by using the following syntax:
    // db.query(sql, args)
    // q: how can i use this function to query the database?

}
