export class Client {
  constructor(
    public name: string,
    public studyAt: string,
    public mobile: string,
    public graduated: boolean = false,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public email?: string,
    public comments?: string
  ) {}
}
