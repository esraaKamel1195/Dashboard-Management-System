export class Room {
  constructor(
    public name: string,
    public code: string,
    public costPerHour: string,
    public usage: string,
    public allowedNumber: number,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public comments?: string
  ) {}
}

export class RegisterRoom {
  constructor(
    public name: string,
    public dayOfRegisteration: string,
    public from: Date,
    public to: Date,
    public mobile: string,
    public registeredBy: string,
    public registeredFor: string,
    public price: number,
    public allowedToCancel: boolean = false,
    public addedBy: string,
    public updatedBy: string,
    public addedAt: string,
    public updatedAt: string,
    public _id?: string,
    public comments?: string
  ) {}
}
