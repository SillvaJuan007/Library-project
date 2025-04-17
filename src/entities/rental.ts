import { Entity, PrimaryGeneratedColumn,Column} from "typeorm";

@Entity("booksid")

export class Rental {
@PrimaryGeneratedColumn("uuid")
id:string

@Column("decimal")
price: number;

@Column()
tenant: string;

@Column()
paymentMethod: string; // pode ser "pix", "boleto", "dinheiro", etc.

}