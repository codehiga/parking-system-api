import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [CarModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
