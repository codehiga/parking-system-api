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

    let query = await prisma.transaction.findFirst({
      where : {
        plate : {
          equals : plate
        }
      }
    })

    console.log(query)
    
    return query;
  };

  allParkedCars = async () => {

    return await prisma.transaction.findMany({
      orderBy : [
        {checkin : 'desc'},
      ]
    });
  };

  doCheckout = async (id : string, transaction : UpdateTransactionDto) => {

    return await prisma.transaction.update({
      where : { id },
      data : transaction
    })
  };


  one = async (id:string) => {
    return await prisma.transaction.findUnique({
      where : { id }
    })
  }

}