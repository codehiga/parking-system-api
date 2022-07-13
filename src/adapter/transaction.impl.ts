import { UpdateTransactionDto } from './../transaction/dto/update-transaction.dto';
import { TransactionRepository } from './../transaction/transaction.repository';
import { PrismaClient } from "@prisma/client";
import { Transaction } from 'src/transaction/entities/transaction.entity';

const prisma = new PrismaClient();

export class TransactionRepositoryImplementation implements TransactionRepository {
  
  doCheckin = async (transaction: Transaction) => {

    return await prisma.transaction.create({
      data : transaction
    });
    
  };

  isParked = async (plate: string) => {

    let query = await prisma.transaction.findUnique({
      where : { plate }
    })
    
    return query;
  };

  allParkedCars = async () => {

    return await prisma.transaction.findMany({
      orderBy : [
        {checkin : 'desc'},
      ]
    });
  };

  doCheckout = async (plate : string, transaction : UpdateTransactionDto) => {

    return await prisma.transaction.update({
      where : { plate },
      data : transaction
    })
  };

  one = async (plate : string) => {
    return await prisma.transaction.findUnique({
      where : { plate }
    })
  }

}