export class datagridmodel{
    id: String;
    products: string;
    quantity: number;
    price: number;
    pricePerUnit:number;
    
    constructor(data:any){
       this.id=data.id
       this.products=data.products
       this.quantity=data.quantity
       this.price=data.price
       this.pricePerUnit=data.pricePerUnit
    }
  }
  