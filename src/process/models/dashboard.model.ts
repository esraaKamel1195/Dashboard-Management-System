export class Dashboard {
  constructor(
    public name: string,
    public type: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public comments?: string
  ) {}
}
