import { Injectable } from '@nestjs/common';
import { OwnerRepositoryImplementation } from 'src/adapter/owner.repositoy.impl';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

const ownerRepo = new OwnerRepositoryImplementation();

@Injectable()
export class OwnerService {
  create(createOwnerDto: CreateOwnerDto) {

    const newOwner : Owner = {
      id : createOwnerDto.id,
      name : createOwnerDto.name,
      tel : createOwnerDto.tel
    } 

    return ownerRepo.add(newOwner);
  }

  findAll() {
    return `This action returns all owner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
