import { UpdateTransactionDto } from './../transaction/dto/update-transaction.dto';
import { TransactionRepository } from './../transaction/transaction.repository';
import { PrismaClient } from "@prisma/client";
import { Transaction } from 'src/transaction/entities/transaction.entity';

const prisma = new PrismaClient();

export class TransactionRepositoryImplementation implements TransactionRepository {
  
  doCheckin = async (transaction: Transaction) => {
  add = async (transaction: Transaction) => {
    return await prisma.transaction.create({
      data : transaction
    });
  };

  isParked = async (plate: string) => {

    let query = await prisma.transaction.count({
      where : {
        idCar : {
          equals : plate
        }
      }
    })
    
    return query === 1 ? true : false;
  };

  allParkedCars = async () => {

    return await prisma.transaction.findMany();
  };

  doCheckout = async (id : string, transaction : UpdateTransactionDto) => {
    return await prisma.oldTransaction.create({
      data : {
        id,
        ...transaction
      }
    })
  };


  one = async (id:string) => {
    return await prisma.transaction.findUnique({
      where : { id }
    })
  }
  
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