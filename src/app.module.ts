import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { TransactionModule } from './transaction/transaction.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [CarModule, TransactionModule, OwnerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
