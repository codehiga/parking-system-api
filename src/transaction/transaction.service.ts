import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepositoryImplementation } from './../adapter/transaction.impl';
import { randomUUID } from 'crypto';
import { Transaction } from './entities/transaction.entity';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

const transactionRepo = new TransactionRepositoryImplementation();

@Injectable()
export class TransactionService {
  create(createTransactionDto: CreateTransactionDto) {

    const transaction : Transaction = {
      id : randomUUID(),
      checkin : new Date(),
      idCar : createTransactionDto.idCar,
      idOwner : createTransactionDto.idOwner,
      checkout : new Date()
    }

    return transactionRepo.doCheckin(transaction);
  }

  list(){
    return transactionRepo.allParkedCars();
  }

  isParket(plate : string){

    return transactionRepo.isParked(plate);
  }

  async doCheckout(id:string){

    const transaction : UpdateTransactionDto = await transactionRepo.one(id);
    transaction.checkout = new Date();

    console.log(transaction)

    return await transactionRepo.doCheckout(id, transaction);
  }
}
