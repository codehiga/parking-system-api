import { Car } from './entities/car.entity';
import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CarService {

  carRepository : CarRepository;
  car = new Car();


  create(createCarDto: CreateCarDto) {
    
    if(!createCarDto.checkin) createCarDto.checkin = new Date();

    this.car.setId(randomUUID());
    this.car.setCheckin(createCarDto.checkin);
    this.car.setCheckout(new Date());
    this.car.setColor(createCarDto.color);
    this.car.setPlate(createCarDto.plate);


    return this.car
    return this.carRepository.add(this.car);
  }

  findAll() {
    return `This action returns all car`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}