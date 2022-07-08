import { Transaction } from './entities/transaction.entity';


export interface TransactionRepository {

  add : ( transaction : Transaction ) => Promise<Transaction>;
  isParked : ( id : string ) => Promise<Boolean>;
  allParkedCars : () => Promise<Transaction[]>;
  findById : ( id : string ) => Promise<Transaction>;
  doCheckout : ( id : string ) => Promise<Transaction>;
  doCheckin : ( id : string ) => Promise<Transaction>;
}