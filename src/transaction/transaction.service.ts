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
      idOwner : createTransactionDto.idOwner
    }

    return transactionRepo.add(transaction);
  }

}
