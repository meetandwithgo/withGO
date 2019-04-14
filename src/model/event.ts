export class Event {
    constructor(
        public id: number,
        public organization: number,
        public title: string,
        public eventDate: Date,
        public place: string,
        public tumbnail: string,
        public content: string,
        public tickets: Ticket[]
    ) { }
}

export class Ticket {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public saleDate: Date,
        public price: number
    ) { }
}

export class Date {
    constructor(
        public start: string,
        public end: string
    ) { }
}