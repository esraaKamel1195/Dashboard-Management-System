export class Plan {
  constructor(
    public name: string,
    public price: number,
    public numOfDays: number,
    public code: string,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public numOfHours?: number,
    public limitedPeriod?: string,
    public discount?: string,
    public comments?: string
  ) {}
}
