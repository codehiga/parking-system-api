import { CarRepositoryImplementation } from '../adapter/car.repository.impl';
import { Car } from './entities/car.entity';
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { randomUUID } from 'crypto';

const carRepository = new CarRepositoryImplementation();

@Injectable()
export class CarService {

  create(createCarDto: CreateCarDto) {
    const car : Car = {
      id : randomUUID(),
      color: createCarDto.color,
      plate : createCarDto.plate,
      idOwner : createCarDto.idOwner
    }

    return carRepository.add(car);
  }

  findAll() {
    return carRepository.list();
  }

  findOne(id: string) {
    return carRepository.one(id);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return carRepository.update(id, updateCarDto);
  }
}