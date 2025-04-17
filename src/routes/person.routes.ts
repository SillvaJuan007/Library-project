import express from "express";
import { AppDataSource } from "../data-source";
import { Person } from "../entities/person";
const router = express.Router();



router.post("/person", (req, res) => {

    const repo = AppDataSource.getRepository(Person);
    const person = repo.create(req.body);
    repo.save(person);
      
    });