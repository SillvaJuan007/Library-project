import express from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../entities/book";
const app = express();
app.use(express.json());


app.post("/book", async(req, res) => {

const repo = AppDataSource.getRepository(Book);
const book = repo.create(req.body);
await repo.save(book);

});