import "reflect-metadata";
import { DataSource } from "typeorm";
import { Person } from "./entities/person";
import { Book } from "./entities/book";
import { Copy } from "./entities/copy";
import {Rental}from "./entities/rental";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "zangado0717",
  database: "library",
  synchronize: true,
  logging: true,
  entities: [Person, Book, Copy],
  migrations: [],
  subscribers: [],
});