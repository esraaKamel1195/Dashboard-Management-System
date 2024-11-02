export class UserProduct {
  constructor(
    public product: string,
    public client: string,
    public quantity: number,
    public price: number,
    public total: number,
    public date: Date,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public comments?: string
  ) {}
}
