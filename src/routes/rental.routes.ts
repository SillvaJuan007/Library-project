import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Person } from "../entities/person";
import { Copy } from "../entities/copy";
import { Book } from "../entities/book";
import { Rental } from "../entities/rental";

const router = Router();

router.post("/rental", async (req, res) => {
  const { personId, copyId } = req.body;

  const rentalRepo = AppDataSource.getRepository(Rental);
  const personRepo = AppDataSource.getRepository(Person);
  const copyRepo = AppDataSource.getRepository(Copy);

  try {
    const person = await personRepo.findOneBy({ id: personId });
    const copy = await copyRepo.findOneBy({ id: copyId }); // Aqui é o copyRepo, não personRepo

    if (!person || !copy) {
 //     return res.status(404).json({ message: "Person or copy not found" });
    }

    // Cria o aluguel
    const rental = rentalRepo.create({
      Person,
      copy,
      rentalDate: new Date(), // se quiser adicionar data
    });

    await rentalRepo.save(rental);

   // return res.status(201).json(rental);
  } catch (error) {
    console.error("Erro ao criar aluguel:", error);
   // return res.status(500).json({ message: "Erro interno no servidor" });
  }
});

export default router;