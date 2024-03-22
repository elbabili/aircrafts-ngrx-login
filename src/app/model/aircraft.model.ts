
export interface Aircraft {
  id:number;
  prog:string;
  design:boolean;
  development:boolean;
  equipments : {}
}

export interface Piece {
  id:number;
  name:string;
  category:string;
  price:number;
}
