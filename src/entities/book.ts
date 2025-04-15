import { Entity, PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import {Copy} from "./copy";

@Entity()
export class Book{
@PrimaryGeneratedColumn()

id: number;

@Column()
author: string;

@Column()
title: string;

@Column()
isbn: string;

@OneToMany(() => Copy,(Copy) => Copy.book)
copies: Copy[];


}