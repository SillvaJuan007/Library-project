import express from "express";
import { AppDataSource } from "../data-source";
import {Copy} from "../entities/copy"
const app = express();
app.use(express.json());


app.post("/copy", async (req, res) => {

    try {
        const repo = AppDataSource.getRepository(Copy);
        const newCopy = repo.create(req.body); 
        await repo.save(newCopy);
        return res.status(201).json(newCopy);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error creating copy." });
      }
    });