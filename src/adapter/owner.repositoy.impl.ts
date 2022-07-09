import { PrismaClient } from "@prisma/client";
import { Owner } from "src/owner/entities/owner.entity";
import { OwnerRepository } from "src/owner/owner.repository";

const prisma = new PrismaClient();

export class OwnerRepositoryImplementation implements OwnerRepository {

  add = async (owner : Owner) => {

    return await prisma.owner.create({
      data : owner
    })
  }
}