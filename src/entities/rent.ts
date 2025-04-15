import { Entity, PrimaryGeneratedColumn,Column} from "typeorm";

@Entity("booksid")

export class id {
@PrimaryGeneratedColumn("uuid")
id:string

@Column("decimal")
price: number;

@Column()
tenant: string;

@Column()
payment: string;

}