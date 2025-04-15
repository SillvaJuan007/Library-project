import express from "express";
import { AppDataSource } from "../data-source";
import { Person } from "../entities/person";
const router = express.Router();



router.post("/person", function (req: express.Request, res: express.Response) {

    const repo = AppDataSource.getRepository(Person);
    const person = repo.create(req.body);
    repo.save(person);
    return res.status(201).json(person);    
    }
);