import { Request, Response } from 'express';
// @ts-ignore
import {db} from '../database/database';
import {Nft} from "../models/ntf";

class NFTController {
    getAll(): Promise<Nft[]> {
        return new Promise<Nft[]>((resolve, reject) => {
            const sql = `
                select * from nft
            `;

            db.query<Nft>(sql, (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    getById(id: number): Promise<Nft> {
        return new Promise((resolve, reject) => {
            const sql = `
                select * from nft where nft_id = ?
            `

            db.query<Nft>(sql, [id], (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    resolve(results[0]);
                }
            })
        });
    }

    create(req, res): Promise<Nft> {
        return new Promise((resolve, reject) => {
            const { name, description, image_url, price, owner } = req.body;

            const sql = `
                INSERT INTO nft (nft_id,owner, name, description, image_url, price, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `

            db.query<Nft>(sql, [null, owner, name, description, image_url, price, new Date(), new Date()], (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(results);
                }
            });
        });
    }

    update(req, res): Promise<Nft> {
        return new Promise((resolve, reject) => {
            const { name, description, image_url, price, owner } = req.body;

            const sql = `
                UPDATE nft SET name = ?, description = ?, image_url = ?, price = ?, updated_at = ?
                WHERE nft_id = ?
            `

            db.query<Nft>(sql, [name, description, image_url, price, owner, new Date(), req.params.id], (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(results);
                }
            });
        });
    }

    delete(req, res): Promise<Nft> {
        return new Promise((resolve, reject) => {
            const sql = `
                DELETE FROM nft WHERE nft_id = ?
            `

            db.query<Nft>(sql, [req.params.id], (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(results);
                }
            });
        });
    }
}

export default NFTController;
