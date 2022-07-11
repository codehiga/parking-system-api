export class Transaction {
  id : string;
  checkin : Date;
  checkout ?: Date;
  idOwner : string;
  plate : string;
  name : string
  tel : string
  active ?: boolean;
}
