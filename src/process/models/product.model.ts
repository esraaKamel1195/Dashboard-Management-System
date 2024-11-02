export class Product {
  constructor(
    public name: string,
    public price: number,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public comments?: string
  ) {}
}
