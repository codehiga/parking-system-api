import { Car } from "./entities/car.entity";

export class CarRepository {

  add : ( car : Car ) => Promise<Car>;
}