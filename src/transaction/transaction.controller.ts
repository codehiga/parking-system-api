import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  list(){
    return this.transactionService.list();
  }

  @Get("/parked/:id")
  isParked(@Param('id') params : string){

    return this.transactionService.isParked(params);
  }

  @Patch("/checkout/:id")
  checkout(@Param('id') params : string){
    return this.transactionService.doCheckout(params);
  }

  @Get(":id")
  one(@Param('id') params : string){
    return this.transactionService.one(params);
  }
}
