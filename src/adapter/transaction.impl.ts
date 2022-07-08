import { TransactionRepository } from './../transaction/transaction.repository';
import { PrismaClient } from "@prisma/client";
import { Transaction } from 'src/transaction/entities/transaction.entity';

const prisma = new PrismaClient();

export class TransactionRepositoryImplementation implements TransactionRepository {
  
  add = async (transaction: Transaction) => {
    return await prisma.transaction.create({
      data : transaction
    });
  };

  isParked = async (id: string) => {

    let query = await prisma.transaction.findUnique({
      where : { id }
    });
    
    return query !== null ? true : false;
  };

  allParkedCars: () => Promise<Transaction[]>;

  findById: (id: string) => Promise<Transaction>;

  doCheckout: (id: string) => Promise<Transaction>;

  doCheckin : (id:string) => Promise<Transaction>;
}