import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Book } from "./book";

@Entity()
export class Copy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column({ default: true }) // assume que a cópia está disponível inicialmente
  disponivel: boolean;

  @ManyToOne(() => Book, (book) => book.copies)
  Book: Book;
    book: any;
}