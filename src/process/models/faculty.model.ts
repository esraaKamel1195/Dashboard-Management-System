export class Faculty {
  constructor(
    public name: string,
    public addedAt: string,
    public updatedAt: string,
    public addedBy: string,
    public updatedBy: string,
    public numOfClients?: number,
    public numOfGraduated?: number,
    public numOfUngraduated?: number,
    public _id?: string,
    public comments?: string
  ) {}
}
