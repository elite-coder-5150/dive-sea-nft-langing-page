import User from "../models/User"
// @ts-ignore
import db from "../database/database";
class UserController {
   getAll(): Promise<User[]> {
       return new Promise<User[]>(async (resolve, reject) => {
           const sql = `
                select * from users
           `;

           db.query<User>(sql, (err, results) => {
               if (err) {
                   console.error(err);
               } else {
                   resolve(results);
               }
           });
       });
   }

    getById(id: number): Promise<User> {
        return new Promise((resolve, reject) => {
            const sql = `
                select * from users where user_id = ?
            `;

            db.query<User>(sql, [id], (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    resolve(results[0]);
                }
            })
        })
    }

    create(user: User): Promise<User> {
       return new Promise((resolve, reject) => {
              const sql = `
                 insert into users (name, password, email) values (?, ?, ?)
              `;

              db.query<User>(sql, [user.name, user.password, user.email], (err, results) => {
                if (err) {
                     console.error(err);
                } else {
                     resolve(results[0]);
                }
              });
       });

    }

    update(user: User): Promise<User> {
       return new Promise((resolve, reject) => {
            const sql = `
                 update users set name = ?, password = ?, email = ? where user_id = ?
            `;

            db.query<User>(sql, [user.name, user.password, user.email, user.id], (err, results) => {
                if (err) {
                     console.error(err);
                } else {
                     resolve(results[0]);
                }
            });
       });
    }

    delete(id: number): Promise<User> {
       return new Promise((resolve, reject) => {
           const sql = `
                delete from users where user_id = ?
           `;

           db.query<User>(sql, [id], (err, results) => {
                if (err) {
                      console.error(err);
                } else {
                      resolve(results[0]);
                }
           });
       });
    }
}

export default UserController;
