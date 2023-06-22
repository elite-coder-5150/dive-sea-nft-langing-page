// @ts-ignore
import mysql from 'mysql';
class Database {
    private static instance: Database;
    private connection: mysql.Connection;

    private constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'dive_sea'
        });
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

    public query (sql: string, args?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    return reject(err);
                }

                resolve(rows);
            });
        });
    }
}
