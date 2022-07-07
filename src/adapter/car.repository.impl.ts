import { UpdateCarDto } from './../car/dto/update-car.dto';
import { PrismaClient } from "@prisma/client";
import { CarRepository } from "../car/car.repository";
import { Car } from "../car/entities/car.entity";

const prisma = new PrismaClient();

export class CarRepositoryImplementation implements CarRepository {

  add = async (car: Car) => {

    return prisma.car.create({
      data : car
    });
  };

  list = async () => {

    return prisma.car.findMany();
  }

  one = async (id:string) => {
    return prisma.car.findFirst({
      where : { id }
    });
  }

  update = async (id: string, updateCarDto : UpdateCarDto) => {
    return prisma.car.update({
      where : { id },
      data : updateCarDto
    })
  }
}