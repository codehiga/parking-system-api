import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  idCar : string;
  idOwner : string;
  checkin : Date;
  checkout : Date;
}
