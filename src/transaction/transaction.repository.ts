import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';


export interface TransactionRepository {

  doCheckin : ( transaction : Transaction ) => Promise<Transaction>;
  isParked : ( plate : string ) => Promise<Boolean>;
  allParkedCars : () => Promise<Transaction[]>;
  doCheckout : ( id:string, transaction : UpdateTransactionDto ) => Promise<Transaction>;
  one : (id:string) => Promise<Transaction>;
}