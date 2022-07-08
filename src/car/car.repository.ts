import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from "./entities/car.entity";

export interface CarRepository {

  add : ( car : Car ) => Promise<Car>;
  list : () => Promise<Car[]>;
  one : ( id : string ) => Promise<Car>;
  update : ( id : string, updatedCarDto : UpdateCarDto ) => Promise<Car>;
}