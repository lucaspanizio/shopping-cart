export class Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;

  constructor(id: string, title: string, price: number, thumbnail: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}
