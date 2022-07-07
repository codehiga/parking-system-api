export class Car {

  private id : string;
  private plate : string;
  private color : string;
  private checkin : Date;
  private checkout : Date;

  constructor(
    // private id : string,
    // private plate : string,
    // private color : string,
    // private checkin : Date,
    // private checkout : Date
  ){}

  setId(value : string){
    this.id = value;
  }

  setPlate(value : string){
    this.plate = value;
  }

  setColor(value : string){
    this.color = value;
  }

  setCheckin(value : Date){
    this.checkin = value;
  }

  setCheckout(value : Date){
    this.checkout = value;
  }
}
