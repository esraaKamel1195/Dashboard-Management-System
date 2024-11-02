export class RegisteredUser {
  constructor(
    public name: string,
    public dayOfRegisteration: string,
    public start: Date,
    public hasPlan: boolean = false,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public to?: Date,
    public cost?: number,
    public catering?: number,
    public lockers?: number,
    public copy?: number,
    public total?: number,
    public planDiscount?: string,
    public comments?: string
  ) {}
}
