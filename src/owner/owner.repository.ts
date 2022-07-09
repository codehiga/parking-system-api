import { Owner } from "./entities/owner.entity";

export interface OwnerRepository {

  add : ( owner : Owner ) => Promise<Owner>;
}