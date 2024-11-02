export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public admin: boolean = false,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public comments?: string
  ) {}
}
